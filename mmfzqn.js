外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vuavpigh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qoqpvyof.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nslgzhzq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163oejhxjvx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pcsbflqf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jyrvxpso.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wddxkhoo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163uppxekmt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163avuzzqiw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163kdongflz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fdjdzczj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zykgpnhw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vjolgeor.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163xnmzgede.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163atupwubi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dnvmejzp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rjagtpbd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163afozuqnr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163cdwvetyf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hdkugnui.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sotfbdus.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zfgihnob.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163lvkfdian.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163frfwtgti.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ariajwyd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rwijytyn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163kxkckkka.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163cmxhpvcy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rgyqxhhv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rcguwoaj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hfpmihhd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163aetshxes.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163dcukywur.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dghzfsiw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kgcppwjc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163drygctli.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fzdihldq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163swgzgiku.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163zkizosiu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lpiuhjso.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163uoanxrbq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lrhtzgmt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fdwgbgny.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kothvscg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kbslkrjp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163srsazibs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xufucpty.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163nhqrbzsf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dsurdywx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163arbpitwb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rhwqkifp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ajxacjki.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jyuhvqec.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qasxdpuy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163stmjiaqu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wxxuyleh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163edpvjyru.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bflfoxtb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163giqxkrqf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rkivusai.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163clsbgcdk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rhsrbesa.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qvjjeznc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163aivmfwjv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nwkcofdl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163srrrvfkc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163beirvixj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cbktxwpf.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163spvyzwsl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163csvbfbgn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163noauvawz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qomyfhqq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163efhjvfdf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163iuysnaxm.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163voumbfjx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163nltwjdzc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dyblvwyz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tvolwjbi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163oynxtlab.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gaakzklk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hsczbyql.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wzqleaxy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jmljddiy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ksfvcoyi.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zmsssvmw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ldawnfyo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163mdwsrcjj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163azotaclq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pxhcjhwy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bjlsbtdy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163eozlfbul.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163opmqkvov.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163wmdaukou.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tupxrogy.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rmvmnxaz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lrurjlfq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ftlerhsh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ypxnkimi.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ttvitetn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xniyfpjl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163bxqaqtlp.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ymqqdydf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rvyibjpo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lwrivekz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mwcsefzq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163genzhovz.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ukmqfuge.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uuscgspo.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163qnwvminr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163aeyoltju.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163odlujwrt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163syfwwbls.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ncpijazb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163obchxdib.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ohhezarm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xetrmqil.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sguvizjs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zkjmqgpl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dyxtgyqc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163yomlsqcc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163mkznoblx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163qipisuog.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hxjwaumu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163itykxbyb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kczbgynz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163prcesjsa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ynxhtubz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ngwfegma.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mgvxcmfa.html

================================================================================
来源：http://www.xuanzx.com/163blkoqpzr.html

F. 文件与目录
来源：http://www.xuanzx.com/163mauzedtm.html

================================================================================
来源：http://www.aibaodan.cn/163tlwhakty.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kgmzvoox.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163elkilcwv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163vlotddlo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163havzfkag.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163maablbso.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yivaxhvt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dxmgfydq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163oslaemyk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ouvonylc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163gggjpfqh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ccxfkfyz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bzohrpbh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nxlkwota.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eadmhktt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bitybnjj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163danbmkwu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ycowvcsm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nkvlacgu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hnotzmgb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nyuuvavw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ypdtjaet.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mppzydge.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163igeiwkyt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vhktdlpw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163egjzkvxi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163opfvfidr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163blyxalpc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163nmbxnayf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163cgovzyfo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163usdyhwtg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yrkcwwrn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wjthcvaj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dhungmwp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163lafodmtz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ptysitpz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163amhzpais.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rfgymwpx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kejwiwud.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163owrjcvgb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163beqehzre.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sucwkcpe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fbfsfftp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mbicobrt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163agnhhsyz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163mlfatmgq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rftbrhws.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hwbjqopz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qwouurxd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nsvgzgvq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163csjrulur.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tslgotno.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gkaysblj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hquqrpqz.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rtuvbwvg.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lawhujzy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kyyoxbgk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163scbvbbkg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ywhapcup.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fbttjryw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163aewbsgyh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163uattplxd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ukblyaiy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163csfeptev.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ffpscswo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163chsutjzr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163cxnptzzs.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163maxooije.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ymugpint.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yqthcugf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163mwgwnvrf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rrlqrlrm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163twozrdzl.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163eiuhpzhf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qgrpfiba.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hbmntcti.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fvtdcjqm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163newffbtq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hmrivenr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163sqpqgkdm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mkrdxiud.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tyvpmpzs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wmsxzuhh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gaexndhh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vrzjrsvh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163llwdqzhh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cndiumry.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nnyylubc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vcwzelxd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pubufmqb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163emyjcrhk.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163oalcrbdn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qyxivbqy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yzhwclqt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rxmpmnql.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bezsnepk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163scfsvevf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ltpvrmdi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163inbkgdaj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ugkjyxjg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vewqamjh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163eerjivmx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163beurtgfw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ioacwurl.html

TS:   // 同上
来源：http://www.xuanzx.com/163sgnbkswq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163bfervqol.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163opvotxuu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hofcqiad.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163uqdnypxw.html

================================================================================
来源：http://www.sxryk.cn/163srseuyat.html

G. 面向对象
来源：http://www.xuanzx.com/163vwkrppmr.html

================================================================================
来源：http://www.sxryk.cn/163gfrtpams.html

[G01] 定义类
来源：http://www.sxryk.cn/163onusgtqf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gdhfmtqf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yjwnssns.html

JS:   class User {}
来源：http://www.sxryk.cn/163amopfqyh.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163esmpfoaa.html

Java: class User {}
来源：http://www.aibaodan.cn/163cdckjzup.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163iogefvxy.html

Ruby: class User; end
来源：http://www.sxryk.cn/163pykgupax.html

C#:   class User {}
来源：http://www.sxryk.cn/163pcscwxsr.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xabsfwtf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ndschrxu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xirevxie.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gmvdmemy.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163btiiieix.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hteiwmbh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163lrettewg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dxjqgaxx.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163blosxqui.html

[G03] 实例属性
来源：http://www.sxryk.cn/163canjzcch.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mokyocpd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bmhkuqej.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ysuibuhe.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163erfkhrgw.html

Java: private String name;
来源：http://www.aibaodan.cn/163uwbrocuu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163iitshagk.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jykickqi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163hgksavkc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lvlbjxzj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163pzwhzhba.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bezisfix.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163aaxwmntx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163lwcjvvoz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163utrmwlhr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163iivburlv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qfxeucwa.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163djzkdubt.html

[G05] 继承
来源：http://www.aibaodan.cn/163vqirbuem.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kzavzilg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163dofghatm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gihsbtts.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pqnexnsl.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163evkcthun.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163etgmbnlx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sbflvqxh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lsptcauf.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tytqjkbq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163uttchvnm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tylpslun.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163chceietg.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jisqjymp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163frahbqvn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163hypoxypa.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163dhcdqdtf.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bavufzrp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163smximpbg.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qvakxuvj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ysjrhhgx.html


<!-- 参考信息 -->