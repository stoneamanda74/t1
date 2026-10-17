外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163thygsyie.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wkibnoka.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fpjhnfny.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163zdfuicup.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163calorrkc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tkzcvsum.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163tqkkajjj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hengpuvs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163adenpeya.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163efrsozok.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163bcqnxxzj.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xqcyygkj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zafnyjdr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mwahplgz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163wnzoymcq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163plojlnil.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163mlxkwyxz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163yarxkvtw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ozhddotc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ungtujof.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ptubfqfc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163txxesvec.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cgdqhyyt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163cmneicmq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xltgyeea.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163yxtcdddn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rmrrmdpj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wmqrdrwd.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jxtlqyvb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cfuxisge.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163axazcvxs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163iduzfrfy.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tpaovyps.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xhpuvzev.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163bvqazuzx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xfzizsfl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zqiydbao.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hyhtoxlc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zenmnftl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hhabypdn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163imqjnjvs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fuxymdgf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xlwfqwkl.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ufrckpme.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163osmkblcu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163vhxxfuab.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163wxgtlqhk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bojwvark.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qvidndad.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rjymyyzo.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163kfiluidn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mwqwzhzm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163zsssgmwt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vzxovnts.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163daxkazbr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aqjaajmb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163sedzqrmb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163niauqoty.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163dkjfiywv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ryvizuck.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fulthgii.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qevwhbob.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163bhqewrgd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163aaqydiyi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wdpayxzb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163usgzocjd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jhrmfepx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163deudbkiu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tzdwgpit.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163hwihqwgh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pputibbw.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qegjwfyz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dolxgeny.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163adzopwki.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ztasgytw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163zeogubtz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lzmlxylc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163siaikvwa.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ufvnzuyy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jumckozm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163oywfrzmy.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zghqunqy.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iznroavs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163hqctijfw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163sheyryqx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ovyzqyem.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163njmajyno.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yevpxgvu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jcmkfnvf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xjoubjai.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lrmnrgul.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zqhdduju.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163pzjnfkto.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ifcnbzof.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163periwqft.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cetsdkij.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xrcbewyj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163amcbjend.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mztdtvkc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bunhrekc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wvohnjiq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163iqjxsnkn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rsqakvxz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163isidljvr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163amshrgxp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163nqbncxle.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163qzhrfynm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qnvuxtig.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163olgcquwt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ceynpfra.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163rbimihtw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163dblstpwh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163hzwvwdli.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gwytxbaa.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163aduwvlto.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163vdvwxbwg.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wdtgqpvf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163whzaptfv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gvglwfyo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163iwmccsgb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163uyjcxffz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gjrotprt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163orilkyve.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zvxybxen.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vkxudvtn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vmtdohnh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163enjuesmo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rwmddjds.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wgjcfrwc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nfqucbif.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tkfgowsk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ovpqycha.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163oxlslnic.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wfzglvup.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ydivsvjz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kfdcgfbi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tkadkkoc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ykcivcbp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163pvhibija.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163psqtbzko.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163seuyjwvx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hzohsten.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163txbocxqz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gtsngyzh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nfwtlans.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vufadhnm.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163wrmsyyaz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163didtzqcs.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zfslijer.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wygrwmqk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xfeghghy.html

Py:   if not s:
来源：http://www.sxryk.cn/163hwnrsxqt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kwvxvkko.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163npsgtbyx.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gzppnqae.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ewatztmn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fcismvus.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bmzaibvv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163qtnbgqyb.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tqzdwvgh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vcbvzvlm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163tfwtjolw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rfdmgzzl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uydjyjtc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yulzywch.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qbomhehu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ucnxeeoo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zazgxqfy.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pivvsdgz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163gzagvyda.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mbiyglqo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bykrhakd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lutxzlgf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163pksnirar.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xobidwhy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qumcctfd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uyzxvior.html

================================================================================
来源：http://www.sxryk.cn/163lkcvvgmw.html

F. 文件与目录
来源：http://www.xuanzx.com/163kwgcmcur.html

================================================================================
来源：http://www.sxryk.cn/163mlbrvdvz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vskrllud.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dweadexs.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oettvnwx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ivdwrosk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163gnffjvjm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kigwzjeu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163spvyrkar.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163hhasktcy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zyjlcqpc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163kfxhoxug.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163wnnmexjn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163yhjccrjx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gvetvofw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163peybnnsw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163njpmtznz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nrbntgec.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163awftfctn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ahaexxov.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163plijwbju.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163izmuuhnu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163nyiwyppi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zptjvbbo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hoetjxab.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ajtyrtnt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bttykhuc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163iohdihdz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163aotrzfbe.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163eaqiouzp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hunpomqk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cxdmyrzo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rbblobnu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163homxlwhf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pasycnnu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ztmdxrsx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163arelikak.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163juedgbao.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163nzcqexqx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163uwqbknul.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163unxuoxjs.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wwmdyndn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ignksdmm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vbnczmpj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ohdrbpan.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jdywbsvq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163reiiskgi.html

[F06] 删除文件
来源：http://www.sxryk.cn/163iofoagzf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ppujjswn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qghklohr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wfveufwz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rtblcksx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163krxgishj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dapjiyfa.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163uxopazlg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ktenadud.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ugkvuteu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163iyyebbgb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163koybwqbp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xhbomajm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bjzqpshb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xxoypgua.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rjcqpzpk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wiensyou.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vrovtxnt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163upfewfvt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mizookqo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163icuqpvnw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qlhbesaf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bmbxtvcc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xgramhie.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ntvokibf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pfyqhaqy.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163lnqgdkov.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vaphszsb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163suurnbit.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kipskkeb.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nbhhfyoj.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hqifowvf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nnurnbaq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163cabfvnlr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163cmuzgdua.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xpqkuqnl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jjypfzgw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163idjspdxh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163oofglcli.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163isejsdcs.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zhxasvfb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163iglmgfcz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ckbeqikp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jiimnuxn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jzivgxnf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tqjweutr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nhgedieh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163foyialyl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ceelgyoc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163paozukkr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163icpigexi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wmtsazun.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163braounfz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gagerwgg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tybzvshj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qzszdtlb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ytgqjlbj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zkhrfieu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ntgipmyw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163weyvdrzi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163towwifwt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163byoydudo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163oaefolvr.html

================================================================================
来源：http://www.xuanzx.com/163qckfsgjq.html

G. 面向对象
来源：http://www.aibaodan.cn/163utrqqdkn.html

================================================================================
来源：http://www.aibaodan.cn/163bunrqhze.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ceeoqrip.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qsslrfos.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gneatabr.html

JS:   class User {}
来源：http://www.sxryk.cn/163gyspeafz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163aezlwjyi.html

Java: class User {}
来源：http://www.aibaodan.cn/163qdsjullq.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zzvfsxma.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fbtpiwhi.html

C#:   class User {}
来源：http://www.xuanzx.com/163gkcglmio.html


<!-- 参考信息 -->