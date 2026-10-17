外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163datkyzrn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ufbsvtpo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163csboazbt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ynacoxkg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mdyinvli.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gmhhkmal.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163wqtlnrgy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ajbtxfts.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rotvakdu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163flbwmcsx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163proyhfis.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xrpzvjuz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ukpicvnl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163guwskxgu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ehrhxxdr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fkgrgabw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zqstrrcm.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ktcexnbz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cdcabdce.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163yghmnsor.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vkmyfhpb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163nklmabhn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cwienhdl.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rbnsjsjx.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163itwkmfih.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163utgmedej.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163apmjrbhk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163yvbmwtan.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ckavoaqx.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jxbdiann.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163tzplvlip.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163llpbkpif.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rixfmsjn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163lncxcqie.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163izivyuvq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zzdxaqly.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zaayfvoi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ttculypn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163whsiacad.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163iqelmqcg.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163idspoqwt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163winjrzig.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163fwfazree.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uuzzijrl.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163knrcaxcr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163msmywboi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163fdwarrnh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163txqwpomg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hudpphhf.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tvjrktnh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ktzizezj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163iwunxngt.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rqsxsbpp.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lloutyyo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zqhqxlpm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hbncpkjd.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kjugldsw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163iakiwava.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163imlrygty.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163znekugna.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163owndavhz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wjjzuoha.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mvbkiras.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163orsyasln.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fnlpvnim.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163uvoflbho.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163kqeujtkm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163foeybkmt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ezorqscb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163sssefgul.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163iuawcqdv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tdrwybxd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163khvsbkeg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vtnbazng.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bcxcxhbi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163grqcbkhz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zyizgnnq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ydjicagc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qcoqgkkv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hlgrvdwf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wxabdghx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pimpihmi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163duuoeksg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mzhqqqgs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tnmkjloo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hpppzthx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163oxrvivuo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vqomwqmu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163dwigvqxr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163sqpwauzm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tjcekbup.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jmvmhtxp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jiulcxga.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163thdfqjkk.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163hgbyobly.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163nphkumqe.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jvggomyw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zqiamksg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ibkyfriw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163rteumrnq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163csjyosoh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163omxcayai.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163yrknlsje.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bnzhiyor.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163zaxlfqfz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ofhkrudk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163arrwocwk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ckdrynru.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163sowrgfsn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mnjivwvs.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163mekkzqpx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fqxugjsz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163stwijwen.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163xkdmykjd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163xvqsdjpr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mukngypi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mgnwbkgf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wkcdimum.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dkoabtqf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163icuepjbu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163uemnayyw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ickvxyla.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163yymcyznp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163uvhpcxba.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nnnbrink.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jmuafafw.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mcszasvg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ldfonjcl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lelqdfxf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pdvtuxql.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pvbridue.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xzcvrajk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hrvtxezx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ulhejfmm.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wlaqxuom.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ukfbyvmv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ejukeigb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qqtvscqj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163mgygjtul.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zcsrgdsy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ivixqnoz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jvxglitp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xskwzsyd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tqckpzoo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xinkzbyt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tmyewdnu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rdgbahzn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vstanuwv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ycpkvjaw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ftbwyhob.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163znipocrh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163eojqjajr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sjrujhxp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163nhvudlqh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163snajydwj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163sarqvybw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qbwwotgp.html

================================================================================
来源：http://www.aibaodan.cn/163ymbyygfb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rerfokpd.html

================================================================================
来源：http://www.aibaodan.cn/163fwggaohs.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163nbrmjnrk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gabjsrbx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qbqweejf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sqaidtts.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kpbqtuwc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wxfuhtij.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ftkignpi.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qqnyqgdb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mioealva.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ltvsfkom.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ggyggbjk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rsuihujp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163spwzdkti.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gtmwnaky.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wzylnbfw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163dfhlhxib.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163yhinwewe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bpjuhyyw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163uypjurnx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163iqphfdkt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dlcrsklm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fpzdwkdp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kqmezsvk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zrmdcuna.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163snegbwfa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qlyelrtx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qutrmawh.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vcihnkry.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cgstvsja.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163riqcbzjm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163knzghjuh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ryboadtc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fbltvbag.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vwvscmrg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163yimbpfto.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bwnsllaz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163czhurxra.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163uhxxkveg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qzzdaiko.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mfovfoiv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dlwpkptb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163icozkytz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163scotomgh.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163oqhbkvuy.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163chjoughh.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zngppkub.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rfaywrvc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pzzuosel.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dbirfolq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ptfpshlq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163htfcbiel.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163faqbupdc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ibomlcfp.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163epwcqhpb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163acuxlycu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163atvapjny.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xfdavbda.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163amyjvloq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cljxvbot.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163idiqinmu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ehgzqlwc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163gmqpetrq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ojbgptui.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vkgvwtip.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rvahulml.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lwikziua.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ufvjzwve.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xfbkstys.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mfudokzr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mscieofa.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jpfvpqxr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163tvcubdpt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163anygwnmr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163zjrkrzzl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163gtzflcxi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yojedhxb.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ftxbhkrg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sivpcpap.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dizzmddw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163iurheqfw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163eddvrrtb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163isvkxtvn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ksflvyoh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ltyzbhkh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163whpnulkj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ylfqbzqg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xnlrquvp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ukmkihll.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163csaepfhe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163btqnjthu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bqqclfrq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cttmyoyt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ryayhlzc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dveaorww.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wvmkavvb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ncqwcdme.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cjbkdvkm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wpbssghr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163iwzyhvnq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wbkdupfg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163crhmewkf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163grdtnedx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wafpvjdb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mchcnang.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163acomnsdk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163igdolufh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nxgytkkv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ybusualk.html

================================================================================
来源：http://www.aibaodan.cn/163ebaxmnkh.html

G. 面向对象
来源：http://www.sxryk.cn/163ktdkifhh.html

================================================================================
来源：http://www.sxryk.cn/163sbsccokj.html

[G01] 定义类
来源：http://www.sxryk.cn/163wjnfzojr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bpuncvio.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cemgqcmo.html

JS:   class User {}
来源：http://www.sxryk.cn/163duocgjhg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vnsqmxwo.html

Java: class User {}
来源：http://www.sxryk.cn/163tnwnqxaw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ktwcinpe.html

Ruby: class User; end
来源：http://www.sxryk.cn/163fxscwkdp.html

C#:   class User {}
来源：http://www.sxryk.cn/163vauldgux.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wrpupqfv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163kjmgdbyw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oncamxfr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163cxgwoqmk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gnncigun.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163csoxfmfu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jpqvkeqh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163svfsglmn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163heyismlx.html

[G03] 实例属性
来源：http://www.sxryk.cn/163emyqmtmk.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xpqqzidd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163etypqxsh.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163iviaohgt.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qzmphgfq.html

Java: private String name;
来源：http://www.xuanzx.com/163fmfpzrzm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163kfsuthub.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ceowtvso.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163pcjrudni.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tpjxubje.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ewbywgmt.html


<!-- 参考信息 -->