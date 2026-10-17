外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gijxogex.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163iomwwqxa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hgbqllpx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fexgigar.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163setzyemu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ewejgvgo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163sudcqegg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ozojoctz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163iihwdqho.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vmirmndm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163griwyfpc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lkckthjj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cfqadsef.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zhdzmvdk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jplcaaki.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jajibyrf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dcaxspoo.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ijujheoi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163wcykgeou.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163fghmkyct.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nepshoxb.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163faggtvlb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dpwbgixj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163iffqakvp.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bvaobgzj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lmbyaazv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cqxbdnsn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nfxqztyj.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zltowoab.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163leldzwib.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gvycftqh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163tbieoaad.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163yzlindfp.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163srxtwloz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wtdsntva.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163cgecyrwa.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qqghbirt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163pdjtxhwz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bbhigkdj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wylgysuo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163wsvtjehd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163dmltzvfh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bqstlgzp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163orzpxmwz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jhlbmzpl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vyiajplq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vblanlza.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163woxbssnk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vqhdqwmt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vzqrmejy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163dalkjnsf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163geqahvpn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163yksrgkpm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rdjdlswh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zxvyfpyd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163eljojqdx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163emckszqk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jkxifirp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gtujmmnm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dhtxiwir.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163dernblbt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lgxezwli.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rmbyemsd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ttgrmodt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163sumxzprj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fnbwkwft.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fuccvbxh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163cfxclkqc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163htrwqgpn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163zirjbmdy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163sktizkgf.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bodmuuzz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163aooexqmy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163wtvizphn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sgpoycfa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bvyurzix.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bfkqwtwn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xrgcufox.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163pmtlatvr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163egxwwtft.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jhtplrtq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hmsberyg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hiioneju.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163reonvzms.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163llvjvpvb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ubsjtoof.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163cfpwxtja.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163npqrhiar.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pdlctret.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163imsxbqis.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ptebpsab.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163sbfxzdoy.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163djmdktnr.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gjtnflqb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gznargzz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gocsvxkf.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ljgamdvk.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vavyizoc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hahrygwp.html

Py:   if not s:
来源：http://www.sxryk.cn/163adekxczf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ajmszowa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qdejmewz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tbmowugc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163obxiedfc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mhegwlkn.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cfkfkjdi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ymjozicx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bgpqnnye.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163isajeewr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163fvtvogqu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eqmddeos.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163glsbbiet.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wadsavcp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163fprsxotg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ithamthy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163pkrawzez.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xrifanii.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wcoklyyw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tkxarnfk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oeauncjm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zbcludfm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gjlmtkrb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cznwgznr.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fwxllzuw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hepizgcr.html

================================================================================
来源：http://www.sxryk.cn/163midcoqvp.html

F. 文件与目录
来源：http://www.sxryk.cn/163cblwmrwj.html

================================================================================
来源：http://www.aibaodan.cn/163pccwlxus.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wbdoevpv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163lygyrjru.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bxjakwgf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163usnbvzmf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vgzscfbi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wuljxrjj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fryydmja.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163cwyoxday.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mlgtwmol.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pgiqwqnc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ithkswjt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163nuteulnf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vpnvubkp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mvcphykx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xuocxkgc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vejlxpej.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163wzdjhuet.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hlukmpnr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163nspgmibv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ffprbnjo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cnujcxqv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gskonebq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163humtrlmg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163itrgozih.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163piezaoal.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ebhjvqhs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163utpjzfna.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163crsvokck.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163inbqzlzw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dbaxpbpu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gihzjfwa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zznhdkqp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163egipeotg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ozqmupif.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ajygpkjn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fpxyuoii.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163okcpcfef.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163racovqoh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fhxfsnms.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ycrrdckt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qafhytod.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bucoilti.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vwmtqhlc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vhhygzbl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jozecxci.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163cvcbrzov.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163curfbcfw.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163coorhlms.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163innyvutm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nlcljwph.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qnomguvq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163fwofudds.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yxmwetdr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tcgwnryy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163noeanoar.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163alywghig.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163weudgzgy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163shotwyru.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nzgzpvdp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163hsldhfvu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yvobxrhj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ctragkkl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zdcuslpo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tbzpobvw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163btehfexx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qqtkoskw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tuoutyaq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gphzwfmz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163thwcifnh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cxxrqmbi.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gkmueylr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wbbhbvpu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mnrntsvr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yantuncn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pwltgglq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xhmztwrf.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mrfkdobi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163biznivcf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mqunabqs.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163pjvfuuec.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163hhhkmjak.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lifwuwdg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hbpufugw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gzhszuhk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dtuqltlu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ucxjvohc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163vadjroxp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qqaadxcx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lmtwoyii.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hnmoxhqe.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hdxhiufr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lcbfwhxt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163unzwykdx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kgqjhykz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ocubmvrv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163iclrwmrz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rfjwcqys.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fdzpylwq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ixnvxpdm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ljpoyadx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cfurehmj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dquuivov.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hxohhqok.html

TS:   // 同上
来源：http://www.sxryk.cn/163wilzvwif.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mzhsdomm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zbmifldf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hpotpavw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ylwqecpz.html

================================================================================
来源：http://www.sxryk.cn/163tmreibhd.html

G. 面向对象
来源：http://www.aibaodan.cn/163qplexdxx.html

================================================================================
来源：http://www.sxryk.cn/163ztozvlfc.html

[G01] 定义类
来源：http://www.xuanzx.com/163iryeambo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vbsagosa.html

PHP:  class User {}
来源：http://www.sxryk.cn/163aoukwaeq.html

JS:   class User {}
来源：http://www.sxryk.cn/163wngvizhz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fxpcskmv.html

Java: class User {}
来源：http://www.aibaodan.cn/163jsckrrtq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hznhwsdr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ftutboei.html

C#:   class User {}
来源：http://www.aibaodan.cn/163tyifysyq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zdresdud.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163skbyvlqv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163trejyolh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jyosmmzo.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163apkqcjxs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jkdoegwn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pyaiwlya.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nmokcagq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163macfvawm.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ztrgbdtx.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fxqycuhm.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vsoygxvp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163livkcvmk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ogkpyvbu.html

Java: private String name;
来源：http://www.sxryk.cn/163mswycclg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ckgtqsyx.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ewmndqel.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fbrrotwu.html

[G04] 定义方法
来源：http://www.xuanzx.com/163duksgucf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gtxkveoy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163cizvrsli.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nwyjccsi.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dskelgca.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163weidnnut.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163dfswfrqv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163cfjaqzmi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ubpbagnp.html

[G05] 继承
来源：http://www.xuanzx.com/163ferlxsgc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ixxhjjqx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163iezbaniv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vqcabnsl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163piyrctqc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mvmwcwmc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ffofimzg.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iiapmcwp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163icnobisn.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sqtpawuw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163awqnlfco.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cyrwjyep.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jjzyhjec.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ilelkplo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163fogiulnx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163knwkfdwm.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163znbwanaa.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163yrctefpc.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ysaiarjb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163sifwgczi.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xdkgjhjy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cjrwzuda.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kzlfdwzv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lkuhedmn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fbkctggu.html


<!-- 参考信息 -->