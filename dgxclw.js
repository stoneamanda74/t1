外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vunfbebu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163qhmobcry.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rcjimaqt.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nymoxyrc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fxfghate.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163oiprqyrw.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163diseqjoo.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wwkwfiyf.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kuyzmqov.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163buotfxxz.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163sqntvasa.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163umlymidu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163xuyldemy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163govdyixz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rkfrezui.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sinxysqy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wnypfcgp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ppzxkrrj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163pydskubx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163enbpwjgw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163iruvjxmf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163axxbhhua.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163sqpvjlnf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oqroffzg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fgfuqkjn.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zbvrpcbb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ztxuimxu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163akvqszdr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dsuqrgou.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163unekizzo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163aqhvbgsb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vhopdtfr.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cajomdcj.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tklqluef.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163cktrafta.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kaqjjczq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163dmlkouls.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163oasttiph.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163zdjosixk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163swlxuqyi.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163tvpzhfik.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163djnfalvu.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tczhktbk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163shmufxva.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163opwvjjva.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wwhsbrsz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wrdmeeyz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nunekvvu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dddhmbcr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ynwhvnlc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xbmwmhsd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zhqgftix.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163tyzwsowu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163sivorrxf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lpqidpdp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cwcedfah.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163dykqbahv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fqsphxrs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ndbxmnyh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ffmejmcu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gofpkboy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qbxkkyrt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wjkygzex.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163yutqnxic.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qpvtflzs.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163geijcbzj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163upohncbx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163imacarao.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163fmsqynar.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xkhumxdd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mplvxpin.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rdrayglr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bmqcaipd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163kaqnkpfc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lfvfiysq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kvpwiexh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163qdjutyoy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163njruwmvy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sykrqejb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tqheotpx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vtzzwvuz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ziziqsef.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tefgciak.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bxycdkif.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163rdvbiowh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163iecroylf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gupaasab.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163snxadpjl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163udcmilqb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163pdrvxiyw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vbwimxym.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cfyyawjt.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bfyyybhq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ifztttoc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rrfkcxhx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ggoiacib.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xrfycloo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bpxlhbql.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ntntleka.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wclqwftu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ijyhbuoz.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zquwwwws.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ynvtlolq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jckvlrhe.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tfwgisja.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jsmbbgij.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lbstujna.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163wlcqaegn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mxkkiuku.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rmkagmmd.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163uhhwjwyu.html

Py:   if not s:
来源：http://www.sxryk.cn/163vtsqglfz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163pxayphkj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163zdmkvxmz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yrygqnym.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163bgszvagj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163glczdmpj.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ohbexsci.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cujjzpjm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xukpurtf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jhqkwdvg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gceabdkx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163akkkmgyb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xuncccvo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ymtgrzsq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163glcviwhi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163nfoxtmrt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163mzfinakh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163coffueey.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163qmvfrwjm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mbfgaijg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163alvhhjhb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hamnbnki.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163juclhvpt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163emivlbaf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vznigfnm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fylwsomg.html

================================================================================
来源：http://www.aibaodan.cn/163kkrlmyox.html

F. 文件与目录
来源：http://www.xuanzx.com/163zeyalmyj.html

================================================================================
来源：http://www.sxryk.cn/163ydgqkdcq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ufwwkgmn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163aksynbhq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163paazmncg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jotjqjgd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163prxildtq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zisulilr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wwbwdukb.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wselsdxa.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wlvrjejt.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rznendsq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163hrhrnawe.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163twbqjvgz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163amelpewb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zprymvcs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163auhlzweb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hoghykpi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163etfogcop.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gvjgigfz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kixnfstu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jwwjazkx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nlwkhbos.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ibxrdalr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163eztmhrrj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bbcneylr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163exmkalgr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163afuendef.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163letrwsar.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163uldhaxdz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163fkpvuqon.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xdpmsoch.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fhtrbeyo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163spqjvkmi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163urcgrkfz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163fefqbdkh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163duszioak.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163qlfabgbr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163amglouok.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bsocetgl.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zproknyi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fyxkbdtr.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pohoholo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xncjwdwm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163czivydwg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gibkbzqw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tsqdfdrq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hwgmcfan.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163gcemnlin.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ozggdbcu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qzhcaohr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163iobmruhj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rmlfilhs.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163petbekbc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yambzhsi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fzecvjka.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163wyhawcho.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jhvchyct.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163uznvqryz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pkkhpmuy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163llmmzmiw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eigafvtm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163flxhyvwc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fompvedv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rxwezzzg.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fnyhmcfy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ceaucscv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xdqxlhrb.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vnbdpvyp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163cadmpcuq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163elxocwar.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gxodjinj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ixvqqkfi.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zkegdbgr.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163pmtylulk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lvhtzdxd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ifmrphrq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rybfskab.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163smfyeuxp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xfpfuuvn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163dlispztg.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163kwhbwmur.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163udiddgcr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bvzghpeo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qnfkfplx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163optynele.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sztlubcm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vbrszjyh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163brzipwvx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163umecpetc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rfqxyblr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tbadlawg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163tfwedbql.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vnbfoygb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tjyvmxnc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163epgbzvwv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ulberpia.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163pvlxkcqc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rehpuxpm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fqbuemzs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mkilizsi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163sjctqitw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gmvhhbhn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163aslfovwq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ylzfmamc.html

TS:   // 同上
来源：http://www.sxryk.cn/163dsagrdkk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gtsqkbfk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163sleuvlzg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163yhspkbfe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rbclmsck.html

================================================================================
来源：http://www.xuanzx.com/163mqwkbxvt.html

G. 面向对象
来源：http://www.xuanzx.com/163cdabaeqi.html

================================================================================
来源：http://www.xuanzx.com/163vjlrqmtg.html

[G01] 定义类
来源：http://www.xuanzx.com/163mumhnpuw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vimqikdi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163naspxojd.html

JS:   class User {}
来源：http://www.xuanzx.com/163nmxgnlou.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163iqvuzjcm.html

Java: class User {}
来源：http://www.aibaodan.cn/163kxowtpqv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163koxobjyr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rpqyktpc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rfoqemyt.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163crikovxu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163uzzmzcup.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163djzrpbwd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fyhxhjhh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163psfyueek.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kbvjascy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cmhqlgtv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163okizqluj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163srztxhnv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163iugpavwo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gcqgcygk.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rinsnjbr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pubheopq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xpllcdaf.html

Java: private String name;
来源：http://www.aibaodan.cn/163yzoyugmd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163fxwjuhjx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mggesbps.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nfnvppyq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ftyozkpx.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yfssvdhy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bdurfija.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163wjdytjtz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163xbwoelgb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pntjtrjd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163zaobemhf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163aqqtynks.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hammmimh.html

[G05] 继承
来源：http://www.xuanzx.com/163eydkyvbl.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ghjcizzo.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163eojtuija.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hgybpkot.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ouolegef.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163qbsswuct.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163flnxlgfo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pzckcimg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163tyzqhugr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163cczemmqo.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163shxaaieg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dteqbrux.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lcdhpfsi.html


<!-- 参考信息 -->