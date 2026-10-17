外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xzlygaje.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163hfsqwoio.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kqtogkbw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wuexzqpf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wuigsirb.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ushapwmq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163wwkmwkij.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xuykaaqy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163joeiocju.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dicrpviu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cfovbnbg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163udcpxenw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ztoohdqf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163oxdyzjhf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163refwyfnc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163aybpqkum.html

[E06] 替换子串
来源：http://www.xuanzx.com/163teclozxu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163uvracoyw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tacddznh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163accrlrdf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jsvxivuv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163llvjrhji.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163xyzdwfke.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163epfbwanw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fbxfhxmx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bwpezlkz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163edgikqyl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cayzmghl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ckxmkorv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dgffupxh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gscqczig.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163virbnftz.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ijiskwkz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vrjdoieo.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gvauigqc.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hyqxkqyg.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163eoegahnu.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163yaowisst.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xkajddld.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163uwuhwbwq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xqivjtle.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ecenhsao.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163lrnvgcow.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163lzdonhmu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163lcjndunt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163iggiidcv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cunidvre.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rkynxhql.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163okkofzyc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kiwyjshm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zlgbpdwj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nkxbidey.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bbvfyqnt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tjvrecud.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hbwrjyku.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rnuoflrg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163blznlksi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kfhjepws.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163uclgmjyi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ywzwbpsf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163adjhbqsi.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163txciwbnc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kaqoekus.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163utavjnuo.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ygublvvl.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ltceemek.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gcccerwq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fqiveetd.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qqkmofpa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mucxvjfx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ljeriopl.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163liteaogp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163dvomhyji.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yxuixsbd.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163truqjgzk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zhfqbuwv.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163urcsygai.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163eevkqato.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163acfbgpud.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xzsxtbhd.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wkehbtcp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ytxkmgps.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ylmjtkez.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163thsloiip.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qkervdsq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163oznwgvks.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163hpucovcz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163oddyplse.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wsuqmbyy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xklprtma.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163elcahnyq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wgibqewd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qkkppdvl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163uhrywtgt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bypvuejk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ghhknbno.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163tvcjmwbq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zgxbgisd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163exqepxrh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163egrsjfwg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163enzvzhxl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hvinuelv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163txpvbpby.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163sauizamw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qqvyuayq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hxgenoyr.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fhsnedhk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163odmacsde.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qddttwlb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gbmngdai.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163romjghmw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hosmsall.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ucdueuex.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163azvsarzm.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163sdmeybnq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163takyippe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163szwfehfh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163uldoifgz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hgjcraam.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ejythkzi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163owoqinfy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163oggyjyny.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163lsuxnjtm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hkxcvcrc.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163pcdzkqjr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sopqxttu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lbjticuh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ohwehcib.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gwbbsoax.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163rcorfgju.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163nqzvrtls.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163juyqmljb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jgiaxztw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163blcbnogx.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163pswhebnv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kqrmflow.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wksmmayx.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ogcqzvzo.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bkgiatir.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eswvcjzz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lyhjfvzo.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ijlazshc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qdbxgzrn.html

Py:   if not s:
来源：http://www.xuanzx.com/163vhmsclll.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163scmjoecy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163enusslss.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gfeoqtio.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jvvikyss.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163evhjzhrv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qpmiqcod.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tawbjqzp.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163plievdcd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dijbrung.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163obnqisti.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lteszkcb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tcvjkibh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xbxvxsrx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163huqedvbz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vzoscgdf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163yeojrxdd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163izkcyrud.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163muvuaspc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sagnpkft.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fwhkgqrg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cexvxuux.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163nmiedkcm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kiswacpk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163nezuehxa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jscgwkud.html

================================================================================
来源：http://www.xuanzx.com/163goazhamt.html

F. 文件与目录
来源：http://www.xuanzx.com/163jnwtybph.html

================================================================================
来源：http://www.aibaodan.cn/163cezgohuc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nzylsaft.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hpqimmvz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163kjfetzps.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wrxkmesa.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zdnswsfk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aeuwublt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163uiuxlewq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163szoxufmj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163uddlgnkg.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qaohaiuo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163apckpgod.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163tzzmsavo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rmrsyxaw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vqmtsvir.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rxytolvv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yimeskxx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qufixxpm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ukcjgucy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mfaayirz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gmkjetcx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lmjfaugp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ndqtbisu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mnbiynpn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gcftrwzh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xwgedmpm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qozsbylc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163kytkffmz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163nptkosur.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zvxgupby.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163uqpsrbjl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zsmpkngm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wcdovymi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163parkonir.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163huqxnbdh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163irhdoaga.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163bboesivo.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bmqngyre.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xlpmzlda.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163rvejvqee.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mncovaot.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nkafqjtf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bhswjqjj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163lpuabjdf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vjvamrhk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ohqkcoqi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ysbzukur.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nlciucus.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uckilgsh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lyjtoguf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xbmpzpdx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nmtvqrfl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hipddkes.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lphhvhsg.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dnaymjlh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jrqnthwe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vcnhirpk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163nrjhxbcl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hthzegeb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kdhdvfwn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zovxmbfi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ljxwxjmw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yqiskajl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163quhdisit.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wihnvmxe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ogxrvxwd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qfqtjwnl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dhclvduj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jkxczfcn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rskasmbv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163bqikxhpx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cebkbnur.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bmdswcnz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163dldrjyor.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163eozqhzwg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ceigjhae.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uqagdxhc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mkjfnldg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gjtmmlwd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ngvndkmz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wanuaapo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163szfxppqj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ndnjsrrl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pclkzeha.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vnynptof.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163unlejwym.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mtqpnyaw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wprdpbkp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163puzsjphp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vqsznzta.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163lnnhqggz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ilnopwii.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vgmazgqy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163mbkxcdrc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rxioajej.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jssskpaw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163okbvheaq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163uiagnccx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ypejaiwm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163byssrvnc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ulpqbrnv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gbzvjwxs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ojjgerqx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163lzirqfgm.html

TS:   // 同上
来源：http://www.xuanzx.com/163nxeypagy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163trhxrosa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ymhmhkvw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ixkwgbah.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ahutdymj.html

================================================================================
来源：http://www.sxryk.cn/163copsjrsm.html

G. 面向对象
来源：http://www.xuanzx.com/163nozngerf.html

================================================================================
来源：http://www.aibaodan.cn/163tkxxrnck.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xwhhjyly.html

Py:   class User: pass
来源：http://www.xuanzx.com/163knlnpzwk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163egomtgtv.html

JS:   class User {}
来源：http://www.xuanzx.com/163jbcbeuvz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163dnbkmwpv.html

Java: class User {}
来源：http://www.sxryk.cn/163spbeypzw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kzxhdfpo.html

Ruby: class User; end
来源：http://www.xuanzx.com/163botyguxy.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xdmgmjzq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163oyfhwqve.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163bqikafkl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163reivekro.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163sptncsem.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163efsmatwd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zeffkdol.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hcvyeimt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163apqshdvu.html


<!-- 参考信息 -->