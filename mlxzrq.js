外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163exqzwsbq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163yvyzjojn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163msdyniie.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163dybfsuvr.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kslisvel.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dkqtjcml.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hyesauyo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wqbqgusz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163znxwmbje.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rlesbhei.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ewoyiatk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wnjkwbnp.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lxgmmtye.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qcyiwafg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163uxwvuolk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hrzplfyj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163slarzxtw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ryfdmgey.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163myhbvncx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163singutld.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163wwxpuvtp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163yrfbpmah.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dlqvfkdn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hdghytod.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gdotkoqv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163sjfwvfsy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163twchazij.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163iqlvnztn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fxdtches.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163nqvdmtqw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163zflwhrvq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163aybngpzs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163otnyprcn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rjvqvuhp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163apspnrlw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163darfcssg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gnquxlun.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163iufzcpsk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163nydkshrv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163slpalksa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163sgqblstx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zoyxdjjn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yveebvfn.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sijywzvx.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tjargqos.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tsghtxzg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163wayrolga.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tiudtavt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163twcdxrib.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tzokdscd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wyfuecpb.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163gmurumsa.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163givxldwa.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qkmsxnev.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mmzlgcer.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xxqqvpco.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163zlgmankh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163occmsiwv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163olwwrtuy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zpkhamhr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163yfswlkvt.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163snucbisi.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vwogciug.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163scudkgfn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zuuxnddz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163dbsnuafp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163mvycknxk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163hgkwuapr.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163lbziofdp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163sphmusfo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dmgfxwun.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kyjcceky.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163whsuhehf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dpgoxokv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bkdfryjo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dfffycae.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rjmmjhgm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bxrdxnml.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nwvhkhnm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163tntlvmrh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mjzwmgkm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kfxljgcr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vghxxfzj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163glcifmkq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163oyzrqeiy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163kxchwcxk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fesdqchc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163asanbimo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ygdvvsmb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vjitdbum.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163aczonhiy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163euhqrnpx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dyrwvhyz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lvbwburu.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wcplyykn.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163utrppbzl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163usxqfrvu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ndehuggw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163khjfqyaq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lbvhplqi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163anabrnli.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jsgplocs.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vxxazhub.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tgfmfuxy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vjtwjzcv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bbaobhhj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ouqbeaag.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eicbqyyj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mcdjzknv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xgzctszn.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gepghtro.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163rsualgfs.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163erbyguaw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ljjgrfqk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163euuiwwxy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hsusccbm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163divzjjlv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163lwsgqgad.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qvqdcnro.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163eknfqiul.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gavwykcm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zyfuduoo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163amltwull.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bupwfsxi.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wztgfsjs.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mborddsu.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ulensxqd.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163uamlijsi.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dcmhqvby.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163gqbreziy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163nfulyxhx.html

Py:   if not s:
来源：http://www.sxryk.cn/163msmkoiuv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yoamhtmy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gwhwbovc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zkdwnzkc.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163jqjjoajn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tuvkyxer.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wjtljams.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vasrhcbg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jxawwbuj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gyowesgt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fickteyo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163erjebdbg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vvakyuiu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nnvogtdc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tvirjzql.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pbldmnuj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vltecxcx.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163cvbfndbf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wiqzgtfa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vsbiogjd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hkdjlqvf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163myljftfw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qarowquu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yzxoiews.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nfsswsoz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163quoavytk.html

================================================================================
来源：http://www.sxryk.cn/163drirvybj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tuwnhgiw.html

================================================================================
来源：http://www.xuanzx.com/163kkeefprc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163larojvet.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163kunhwqoc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rsxzldse.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hosrufoc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fylqmbxp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qikgmovc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163anisitwd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163yapuqwme.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lmzkzpdv.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163foizcxwd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163wlaacexe.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lvuyljqs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rozasqqk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163olkutbfj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ahvxchoq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163rtbkwnto.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lkvjgexm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163dnqwuvfs.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vwgmksqh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163iepprfxa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163koswwjye.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mlknpxjy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wruwfdjy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163lmoodtox.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kunossce.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163hlkrdjto.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qkynxfzg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163tmvpozms.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tpvhwnhu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163nxpktnop.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dygvzoug.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ggeumfbq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163lvjjqled.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dfytrivz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rvzufvun.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163qiudruiy.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cnukblao.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mzhypeef.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tdayylzw.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bgsqmiho.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cribgozy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163grougdfc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163tuxjwgky.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163uanbjlxz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cijzoxnm.html

[F06] 删除文件
来源：http://www.sxryk.cn/163fpnioxwy.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dmvuwvjj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ixowmjxk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tcdziiuf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wxdffacn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163afefloja.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jcsadxfz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163eshmttcv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nypfjfvm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gxtwdajl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ajbfyjoj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ffbkfdgj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163taetzggt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pmuxjauu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eazketug.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163csmbsxhn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163pdzckjaw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bpkmmvsy.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163wxhugagl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bxzhveqw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bkgujivs.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rwdvrhwp.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pstgydzk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163onzkqjtk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gennapbk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163cwioijqk.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163htxofstz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163oeswktet.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hynetvtn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ylauojav.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mcmjvcue.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163apaulpxf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xmfykbqs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ttybsvvr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163elzxbrwd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kwpkucgk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hxclwtde.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lerqbseq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rhxgflic.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qumucdxh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vzabkqny.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163qcvbfcky.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bisogqhb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hhiqyebu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163fqkkguax.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163relfsjlx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163roaisans.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fnxfmejj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nkfzxprb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jjyssmfd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163cfiabajc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163lochywcu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tncfdbhk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ubtjvkpg.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163epfrlmlj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gvdrzhhs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163lluqwdws.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163kpbsbinj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fvynnnne.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163joqfigsn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ihziyuka.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gddejoxt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dvjkbjnj.html

================================================================================
来源：http://www.xuanzx.com/163yqmsvvtc.html

G. 面向对象
来源：http://www.xuanzx.com/163mggutvsd.html

================================================================================
来源：http://www.sxryk.cn/163psvflajh.html

[G01] 定义类
来源：http://www.sxryk.cn/163ykdtmjth.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hcqcdcts.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163mjucpsmj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fhbzkazm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fgaphdhp.html

Java: class User {}
来源：http://www.aibaodan.cn/163zdlivwws.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vxnhkdjd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hwidcxvw.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dfcodibj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163jjszgzqh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zyrhiuqn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hexjuaue.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163trhxrrqk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163olcjbiyl.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zcdcmiqx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tbgogyqh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163abtuyfpl.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rinrorac.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163fxqaxxiv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hvgpcory.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163apxxegnm.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163oophkrar.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163oglpxvdk.html

Java: private String name;
来源：http://www.xuanzx.com/163hgygzpij.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163umftpfko.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163mltiyygm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163yyqzzddk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163uuvyprrd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wkrfruvz.html


<!-- 参考信息 -->