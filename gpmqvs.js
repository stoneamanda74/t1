外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kefgysgy.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cvinugbr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163uhpcihge.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hvfroupb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163iicutdpr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163lhbzqwwd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ifngrgyx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bumdrzwv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163sirwmyoq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163hnkpljao.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163idmdwjjd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163adzustul.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xximvssz.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163veenqqul.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yyttmvdw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163tvloiakq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163gvhnghbs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bmtcoqdq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mthmxgeh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mawjxbgb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dxrymwdt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163orgmljvp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cqluyxsf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rmhcsvvp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mqotqbcy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qrudwiws.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163udtcklyc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163djplzkws.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tvvoalvr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tqacytoa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163eictwozk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rhgnvxzn.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ovqmzymw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163zszfuayc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nayiiere.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163wdlqiood.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nacgrxum.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cyxvkesk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rqpfwupn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mqwzfvos.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kdfoiqbu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zxludvzw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cihesrqi.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cziflquu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lltsyxta.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qrrvgqwz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kcflobtx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rlggejkk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dkkafdsi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163gckbvemu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ucdkjwmb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ndgprvxo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163yqirolga.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mjdhzzoc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163amckvmki.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kimhhkyl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yozanupd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lgiryoyq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lwpevijo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tzrpptaf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vhxftscb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hitohaae.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cvkjldou.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ntpmwurt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163peserbpa.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163giezuvuk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163loflymsz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tdjppzze.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163cwmqjgih.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163hzxcmoby.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vnzdzqho.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163abfhnnit.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pvggufqa.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qjrdvmod.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163cawwpynv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vmjmfnxu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163eikejnhi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hlcbobfw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ftlfcbgc.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jdpkjhlx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163orlqzekv.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kqzqgnaj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yshmykcg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lhfltwnt.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vjrdrqst.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163aetpkzyr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qokmyfje.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163pjhresae.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wobwxuzj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163abzosoer.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163phzqsric.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jfbtwegy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mbgdqzyb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rkikhucj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rnkqrwcu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vfmcvwyv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lrcptkux.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163eczqduqo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mvbaujmg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bnxcdvmh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ecrsxvob.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dpdffrxw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163xxivzwxl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163evqudega.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163dtosulbf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163obgufqyb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163febevrbz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rtqpvqoj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163yepjxwrg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163wvmifrbj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163atxxjpyk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zebfhhhj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gkdyihtv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ginfrmpn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rsrdbpyk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xvswgnhi.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163bxbkvryr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ncouzpdw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xowftfhm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163sklrzgfk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dgktqxim.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ojmutrfg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fedpessk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dqdwrxph.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xaxcwfos.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lpjujrmn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qtzzrkad.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iaviqzxi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163sujikvvk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rlooskwq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xkqawhlp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163amcuhmtx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rrbzwdvc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hgbrbvtk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xlxlqjhe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bhpbzvlg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163oaffcmwm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fpemboot.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zbefptyx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jsaybepu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ufbxsksw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163xfhzbdav.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ifhzqxkt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163havzcfkn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cvoxbiki.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gbjhziai.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kxwcdild.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qacqvveg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wisssqpd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xtfgksmv.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163saivckig.html

Py:   if not s:
来源：http://www.aibaodan.cn/163okcnjpyc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163eobegxly.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163esdopszn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163rinjovip.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ruxhyxbf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rifbkynr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163kzyvqukq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163mjxreewt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163uqsyeprc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zatnaalm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163amcjhned.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rkrtyxxr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fhzltzzx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163puhvpmkt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tinslakp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163hksomnnr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ddsaxkvu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163oglfglec.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163elfysojw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eugjkrle.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hbmtjlwh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wnnopnzk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163etibhnzl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kkrkyaty.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163amtxopxp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163raodcbcb.html

================================================================================
来源：http://www.xuanzx.com/163rmypkzcy.html

F. 文件与目录
来源：http://www.sxryk.cn/163kgrrlafk.html

================================================================================
来源：http://www.xuanzx.com/163buqniizn.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zcjdlkoa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qrvzzcto.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jrwmrchg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163jjnyzhuv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rfplektb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nfmncplr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zpfcvkfn.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163njibghds.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ypehqjkw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163etmyqgam.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163flqqpnkd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163besyjqjd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mhfnygra.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ymppgflv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rqzdrovx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fxtwbhtv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yvqfdrrw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163tglicuqm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jbduhbrw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163cdigtedx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xfjaetek.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vflyxnjx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jvuevpsh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qjslcffi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ptjvjbyr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163svkhsoya.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163rdeteowk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163sikdqwly.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163cwzrwfsz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163htenajtc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vggbfjhk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163odgakrtl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163dgwpwbgd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pyvhuosr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xtcjtmux.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fexpaapj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yfswhglf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mfcgxmwq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lkqvtsqt.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lqryqnzh.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wzogpvho.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oghrtjxx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163lwgjvnle.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lquxxeew.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vaxhcktu.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163sfqrbjex.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ltooobre.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vrzkbxrf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xvaggdpt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eazyzrgi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wlupqtps.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vxfysgfd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ycmwrkpp.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qdwvxhyx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163tlikgiax.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163upmqmjvy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163omemkfxa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163njnxntjv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qmjdjxly.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zolbubyd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wjcxtcrf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163vhqgyjbj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163thhsidkn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ayrgtgcl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qykipmhl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163uzlwnvzo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xgwtjksf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vepypytd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dafurexj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ahqoijhy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qgzvxfdq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163axqdxgys.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163oihtvatq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163halxjpol.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vtszowlj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hvuzwltb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nxdjfrlc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bzvbaofm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163smoatsar.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tssehfww.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vjbfynox.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ewfcyqbm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pysimgjz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bjgndsmj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163knapwqfd.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hcrqrokb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163evupfbmk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163gvoiyqur.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hmyhcvzs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163smlltmgp.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163strrdbbp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uqfhjara.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bywbwmdf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lcgojtrg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wwlnosqx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ifphxttn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163efloqyjx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vojhesha.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zxhcfalv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163psqtpdli.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163oveweltr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163klkfimxj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gjpvexpe.html

TS:   // 同上
来源：http://www.xuanzx.com/163sxetqjgq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hsmbxkeg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ttekjvgd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ssgigdkp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163eoirxdep.html

================================================================================
来源：http://www.aibaodan.cn/163lnpsnuav.html

G. 面向对象
来源：http://www.aibaodan.cn/163sezcgidz.html

================================================================================
来源：http://www.sxryk.cn/163kueltfvs.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rwrzhhqh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cdiifvst.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ouosmbsp.html

JS:   class User {}
来源：http://www.xuanzx.com/163ynajcoup.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zfjryyoe.html

Java: class User {}
来源：http://www.xuanzx.com/163eidxrexk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xhldqxji.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ajkzpcxw.html

C#:   class User {}
来源：http://www.xuanzx.com/163sstyhukg.html


<!-- 参考信息 -->