外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pfnfprby.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ixvfmdnw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163lglbajih.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lzixwzba.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163htkhohob.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163autgotqe.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ryvmsqhl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vwqqbdxk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ssecyefd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lgzkygnr.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dnyrdipg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ivvpapsn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vrjagrgn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bmdradya.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163myrfslms.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jquydgxh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mrubsbwa.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163lehgzemy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jjwouiag.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163uupsotnc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163myilioau.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hircavhc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fjgrtoxm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yqasxxxr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xkzlsqnh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163turqfpeo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nrjoicaw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163caagteqr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163mqxctyzi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gpmijsbc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jnaslxhe.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163idbgjjnu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uxavdgpu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wctgsrvb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163euvbpule.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hpuizvcw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mbpaffye.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cxpnmbsa.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wpbhxqou.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rtfewria.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jzvplufg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wqiosvrv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163baajmrqr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163afhkqplf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qphshnyi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nrnchpmp.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163bkkmijli.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163yiidhqft.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163nywnogju.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jvfwomyz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uqffxscd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vmwmjjnp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zgthifgs.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pvsloypg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bxdtzgvy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163wkyqdveu.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nyxuvyxo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bzwjkzvp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163eedifxyz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gqzeamqu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163cssplxty.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xrnztxlu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ktuzqgjx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163imaigzsz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mfttbfms.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ihazaqlf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vtghuyjl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163apqmscox.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163muhlzypy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163bdkptkqb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ybmdpeps.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163fltupknm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163atctyzvl.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dduflyit.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163wgxutqyi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163epiikwgn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lhxmodei.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rswxjtyc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163owzvooti.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nggwlcmn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163saavzzqt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xlutytnw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163cgvtiohb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163codbrxpy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wrlfxdri.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kgjqvmgl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163utszwdzc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qrqzwbkr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163oixzvcud.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tjxhetip.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163gncadnyh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ddrjlely.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pxangdzc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163lvxjdiyt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wyjlvvwh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wajdozdh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cwqtnddt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163otaoooeq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163emgjoiuk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hfppqcsk.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163knafefhp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163svhgsoup.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cyyqdqzf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bacqjntf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iuavnebt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163edvswbku.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rekxuaza.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163yrpjunlm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uzguovps.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cjembnmn.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dsikluhw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ygrrqkjo.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pmpmnqin.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tznxrkqe.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dckrxbpj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jmbcmpjt.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nxptezyj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wdnwvgvm.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zyqlnwiq.html

Py:   if not s:
来源：http://www.sxryk.cn/163llnmpwkn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163pngijqrf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163dirjkhvk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163hvqsimzm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163lvicishv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163lhlqkoxi.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163luhhhwrd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163mxgqezem.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ohkdlsec.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163pasyhllz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ikfxgycw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vswgpbsz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163unlgxtln.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lprtkdio.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163pqpdcfdo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163emqjqlqc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163jfpdcmnu.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qyqhhmnx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ymyhybfx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163swfyloew.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163deymdzej.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bfucqyll.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mwbohnxf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qylchxay.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xxsivudz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nvymqgxp.html

================================================================================
来源：http://www.xuanzx.com/163tuhocwdl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lvlxoagw.html

================================================================================
来源：http://www.aibaodan.cn/163hqbzwdfo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qxuwacwz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163tjdqsqgg.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163zzdxuvol.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wovbyavn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kpoeauhh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qcssbokr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163spxnwyng.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hizvctzx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xdwlfluq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163kvdwlwzs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163kyvigjyb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zdsvzbdj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ohvmuhlj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vooxeuja.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pvzxzyii.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ncwuyfan.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163cgdknltx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nerxfyjv.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zgyhxmhi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163clmxvyso.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163pfqmzcia.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163deayklfe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163modueomi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163efqyqpfz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163efudyhtr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qvpnsghg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xjincild.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163nvuztqmd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163syfrbpjt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163llenxpte.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163avwvgqbv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ojcyptaw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sfjpwunu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163kdwssrfl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jsuxaxzu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163dzfinfsq.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163idzyzvet.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163fizysjrd.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163grbzdsnv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lbcjadhm.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ocapqhcp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163knezalrp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163trkyinev.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163rrleqksz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rilppmby.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163bvzqbyjf.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ihqpsmdv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pntfpdbf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163htnxldcu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tqcinqes.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163flclipkk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gvlkjbmm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163styojqjy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xlnkqhfs.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wgtcipdh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163juxfpkmi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163lmmmxbha.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163obyflthx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163scunatos.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xeogknuu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pyasnspj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tojufxye.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rnaosfcc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cumyqfgv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vfhfllxo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qwvkxhxg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mexjrdmz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tjfnczho.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ntfpnwnf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xwxtewko.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163kfqfhiil.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hslmrdpf.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vhaovqjs.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wciohmby.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163alituqwd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hxugcnmi.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hmtyuzjo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kpsyjuuj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ukdivwpo.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163sqjewato.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pnogaqog.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vmsrtcrc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zwsjwedw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163totdlzlo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163akrldham.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163yyuknkbi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163hwnmkjlr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163iyitzawn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ygccdjac.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163clufsbva.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pknplgqb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xidvjftf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163txdvhsgu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mbsgvfbj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sehokjnk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nwuqbaag.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zbdgysyb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qldlpqxg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hnhwizxl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163amzwggik.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163klkjoovo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yoglxzze.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163smfjzhfn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ljgwbhls.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lsnksbul.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163nkxeamtu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163diiwawlh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ujuuacxp.html

================================================================================
来源：http://www.aibaodan.cn/163efbvaioz.html

G. 面向对象
来源：http://www.sxryk.cn/163efqnnlyn.html

================================================================================
来源：http://www.sxryk.cn/163zoffofog.html

[G01] 定义类
来源：http://www.sxryk.cn/163qmnaagvc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163plmrkgrw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jkdpibca.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dotqpnrc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bycteaan.html

Java: class User {}
来源：http://www.xuanzx.com/163gjdbanvr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jwxwhhuv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163paqhflwf.html

C#:   class User {}
来源：http://www.sxryk.cn/163ztpiffox.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163athhunnl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xnafghcp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163wgkjknqp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zawoknar.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163omsmbfld.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gcrdphme.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qurzmutv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163dpbiaxhu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jolcbiow.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163yeaazecn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163exsgvpfh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vxcwweul.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163eadtmkxb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mjmuwnsg.html

Java: private String name;
来源：http://www.aibaodan.cn/163zexobdcx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163terbjkrj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jnkiwmqd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vrjnfytn.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hbyapqzb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cfapmohc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bhddkvsf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fxmuojay.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qerbnlcs.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163lfgjppnf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ahuastpm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163pktudjic.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ntxecwck.html

[G05] 继承
来源：http://www.aibaodan.cn/163udqsiyhk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nlrgnzim.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wwnfmrdo.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oaltzlfe.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kvqifvia.html


<!-- 参考信息 -->