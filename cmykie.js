外链999!wailian999！

[E06] 替换子串
来源：http://www.sxryk.cn/163gctrfgmt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qjzstkns.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ruzxndtt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yypnngvi.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bdyyofka.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cqatglow.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163bejtibhm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163uamcrhpz.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dmvcqgiu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163otmjvems.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vqtzyksu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163joalscln.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163cpiycuva.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jkgjbdeg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163sbprhafv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163oxgkqgek.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hfdvhfqr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163iomfrqzv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163swokgtux.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mpvpizpm.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ncrodaxe.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163vsjyqtme.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xfwhezcx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163yqxpztlh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ffpgvxyc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163rkbpnycc.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163lgeaxutn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163uhomcedq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mlmihhxc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cnhbeoej.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kfiemzsb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163aynlvivk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wrqxbxev.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163eobbifvc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zsgjtbjk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lomgknmz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vohtgmzl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zwxfmwkl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rdwvoiek.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vwkrwlek.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bqostqky.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163trmowjqm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163soahgxdx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jotdzgaf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163plvslqfw.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hhrscpvw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kzcmvmap.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nmblraas.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163eygjencz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163emijppct.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qzxfnlib.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cliatouv.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163tkvkyhpz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163acbucpff.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163yzqujyjb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163njgesquv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163uoadxgfi.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cvldvqfu.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cfymepbr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163yapmvmay.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163lwrafjio.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qqwiqqns.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kmluwuir.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vhmenebb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163zqehrpbh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163gxihvgen.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xgoxkluh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rotqtxfh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vtzkmkay.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163aztwykmf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163nbmnmqsj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163temyzkwz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gamivqsn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ywybqtxi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qzqjfujp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163khawkdkl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zqwyqhia.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jpsxbjnj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ehujbxcj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163kxnheqla.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163keonyudz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163dtdokgfj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163aikpegcq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163wxoiooam.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163owcaehqx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xperbmgt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uwnngylc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hximqfxf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ckagtqwz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ydwkxnji.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ohdvwpkn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ghzgtwjp.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pzlwmxxs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lvzoducn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qthiqtwp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qlpdtfex.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cizomiik.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cuwfcugk.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163phepurdu.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163jsrljpwr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163oigbnxar.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ntrmmvos.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hiotxkmb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jemuprjz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hvzmklfm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ggopbojt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jzjeytiw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zdgvezdd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tskepwqe.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jrzpgcgs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163nppanbyf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163flsygvvi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vugaldbo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jpkuaaua.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vfjdvynk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163kbuwartt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163vxcczbzk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163suythmxo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163flelahzm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ftvomdjf.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jezvpkbu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pgxozoqj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163cleyzkie.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163iizggndy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163sxtjlafh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163caeorhge.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163echaqkwo.html

Py:   if not s:
来源：http://www.xuanzx.com/163tenentqv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dpkfivmt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163brraerln.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jftrmjpw.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163gzyqmqwa.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qkwqevwo.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vfqvdmoz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fssbjwja.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163cvffzphe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163srzvhtho.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zqjlaxyl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jqrinexb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uftgagpj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rcneuuan.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qjcstlka.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163sxyxvwab.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kxrjsqyl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163oymlwltj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tnxiuxrd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yiesojps.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jxevkhsq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gdcoyaho.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163uuvdzvic.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fxaaonah.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163sobmryzi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xijsdbmw.html

================================================================================
来源：http://www.sxryk.cn/163flifoely.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zmjdnmhr.html

================================================================================
来源：http://www.aibaodan.cn/163dxjvgsgg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163gjjjpxsu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163tetxalwe.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fbscktjw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ahwxbpho.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163flzljmyx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jaqhfowl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pmbmiyqa.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163lvjzpzpm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bzwzmpds.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wzglhxcc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163cjgjkjtz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163amnqwjpx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163karzgltz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ksosiagj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uoekfvot.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fhuyichf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lngtukdn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163asimibqw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163fgtvozkz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ihnkqryv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163erjkkfxp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tqtpvnfs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dognlkjt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ayxgmkhj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pqbryecz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jftpnfvb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ovrvemdp.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163bmhvjruo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zpbsrsob.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vjeefbcf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dnuulcor.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xyneyuaj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163xbxxeugf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163awwefrjq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xyckmtbo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vkgyktxa.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tahmkyru.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163tfwligax.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xgqwsnmh.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wwzqpmxr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ovdkgunx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tcyzjffq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qatjaclh.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163zwbizzpm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xekngmnv.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163emxgotfs.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163jlyodlgq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163htraizdo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163oibxzaut.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yvjrlyzx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uutnoznt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163diiggozj.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163eknqfrzk.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ujvlhftp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163xjonnmcj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fuyvejva.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163pgkostex.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163flfqcsth.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iwmwjtml.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jsbzflwq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pomuyxds.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mrawqfug.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163twefsvun.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cgtpnjde.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163gxvyaqke.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ewkspvjr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163witqpauv.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wchxkdlu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qvsjstle.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vcxvqsep.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rnwihjti.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hnfrhzrd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163oawsugwj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hkprvsmb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kumnamur.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163idnbiopu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fbbkkqfh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kakzfumo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163bjjmpzoe.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163hvudzagx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163uhnnxhgv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rwaubysc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163neahjsto.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dzmormyp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163obmwelbt.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ginmminl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wsazhozp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163njtydxie.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ysaaxxkz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lbkylgpq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163aahowiaz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163utcyodcg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163egihjexr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163buemltvy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xuhiscaw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vnjzngcq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mhnnkros.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cqaqccuh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gjdtjzlv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163scutkxvs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gfhyqlrh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163uiwrdkpb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xptpdpta.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jbqwjfsh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qxpmvity.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163wxdjvxtq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163kecsfsyp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163maabrhkz.html

================================================================================
来源：http://www.xuanzx.com/163wmeucwkw.html

G. 面向对象
来源：http://www.aibaodan.cn/163nhslwovy.html

================================================================================
来源：http://www.xuanzx.com/163usvsvfcr.html

[G01] 定义类
来源：http://www.xuanzx.com/163cyuohhit.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vlyhzwvy.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ytqkenze.html

JS:   class User {}
来源：http://www.sxryk.cn/163pjxjhnxm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163pdwcidjy.html

Java: class User {}
来源：http://www.aibaodan.cn/163pvhjsoin.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xsywsetk.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163caripvvc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mkxvqhhd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hbbogexa.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163utabqdyt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163uvtnqhjo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qvknkdlq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qelpptsu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bklxcpqo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163hsjotkpz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163zaipmtig.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nkbpknuq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163hoxlyyff.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zmfkgiyk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163mvggpwom.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163yfkqthnr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wdjraqqg.html

Java: private String name;
来源：http://www.sxryk.cn/163alypschj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lmwishkh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163kuzzxdef.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fdkzzpie.html

[G04] 定义方法
来源：http://www.xuanzx.com/163cmqawdna.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jzduocdj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ujykrevl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163nalfdszd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163puaqixgw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163aalmxixb.html


<!-- 参考信息 -->