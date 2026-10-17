外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163axszkyzg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hztaasbt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gkekgmox.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vhnfdzhs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mnmridaq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vfmndciz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163wwiukpmf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mtlerjnj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ikizrxxx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vbgivqaq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163tjfbwhdt.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jpaongkl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bgimvkor.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ulsarxmy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ygtcrpma.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163dgllqgwk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163uhlooyzp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ejqwjeru.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ihneuenh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163iogiqqby.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pawsryit.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nsgupcrw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lvjhmcnr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zgxraubv.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xoqoueqo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163izpefydd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dqdityyw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163yihfhrvx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xohmizll.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163iabajedz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tuwfitzs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163apobvcrv.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zfazfsju.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163msbgwwgg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163kkdganjk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cxlyzmdl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163dizjtoup.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hnllipxz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ihnpsrio.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163whobgypz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163etesacfd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163pwldbwdw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nhkxhvya.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nvpxsvgv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163yizjntti.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xikhctch.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hrxovtud.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163myfknmay.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163oapnlwpc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163paazrfej.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163avfozpbz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ldtfhgrg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xrngbuxs.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163iazqmrkf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163iaiokmxb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163gretguyh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xokejcuk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163qdajvvoe.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yfdsxewg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163cwucpdeb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tlyewiwb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ovxpzupg.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qquuxheq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ifljiyuz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163dxrohwca.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mblomppj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163svdkuiru.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163opmkobds.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ipgdxtyc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163lqohzief.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163instpqob.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163etdzliid.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163elyxwlrf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tbqjbwbz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kyjslgta.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163myqsqvci.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tpkbfgod.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mjlknitu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163htflwzdg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qzlkdwks.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wvcnppvj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163eckynpqp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163mshwquyi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xvbifyut.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mhlmfaav.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qsoptigt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163eaqxjmdl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163difgyxks.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fxowcuzo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pfndaybu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163gtzlreyk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163oiehqzwn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dclgpgtn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fcuxadec.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xkhssxdf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163snodjjvw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163cbwvnvpg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163gwvtcjhn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163eeqpxadi.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yxfoheyx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163edbsguam.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163zoeafzvo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163aijmayug.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ragenpul.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yzfuudog.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ixxhjfjk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163sgbovwxt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zpdgubup.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ibvhtgbs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163iwztpqas.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jhhljcod.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qomhuaiu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yfusxdmw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kscvdkjo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163dhzcdbpw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kqicsdch.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ktjveujr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163upwpaeil.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wsclvngm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163buldndtp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pftoyupl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qzymphty.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163liibaydq.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163kzlfcumr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163kqbbetkw.html

================================================================================
来源：http://www.sxryk.cn/163zoxskecu.html

F. 文件与目录
来源：http://www.sxryk.cn/163essxhyqm.html

================================================================================
来源：http://www.xuanzx.com/163zhomezqh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pjumvmqa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163igfpxirh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pszqoorh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ffqckgrw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ujpgecws.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163smwkeahb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163rtbpulzx.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163rsxpidyx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ujetufol.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163dyismfzp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163samucizm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lvqdurcz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uricahpu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hszxjwpt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163czezhrwa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fatfctii.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163wqfdizdn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wqkgbxbw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rpthewjr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163plyrsimb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bciwqrqt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jdgyootl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rserxgpx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gczkcuxs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163rcvyzlgo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163dqpbvlan.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163olrrudzi.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nazowiwx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kuhnymwy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163aabxxmzy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163uhtmjonb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xksxlmad.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163kgwbhxzb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163iwjefpgb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163saahitsq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163pyxivzft.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fdojokwj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163oeccgjcz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ardnpdnr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hhlisuxv.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ldccbuiu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dxkasppa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163awowrplr.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163yjsrhvys.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kgfdrkoc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163dfwynozg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nhdyjpbt.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hcfqminb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yralezhr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pgsfsvry.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nbcpbpvo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163bdkzbrog.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jwburzvq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xyajqlul.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163pfoxpvyn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163pxdaeqlu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mharcbwh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uakpczel.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nttnentq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qopdnftk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163uizzxfem.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163bvtmioiw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vxsfvjch.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163idrxigaf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wfmfhhzp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163rnncktfx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lmsxdrgb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yakzcsfj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163etirwrlb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pywidumw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zhjqedgj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163rnerxlnn.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qfedhzjq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163byizpiri.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jslwnmyp.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163oonalvai.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wvskwuwa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vxiljmuy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163htouohwn.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qgolibzj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lnoereep.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163uthyxbkh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tlleyhtg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jhrwyzup.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hocujcnz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vaxulyzy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163rbarsubm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dbogkcgl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163edyperfv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163texoqyfj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xjfvjjqz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rvemrugz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jcipijti.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163peturpmh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vwyeqbfq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vhgixomn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163zahlxjvn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eaixjlqe.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163yhlzdnbh.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bkugsdup.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fclbniaz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163szvdeskr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163sowhqruu.html

TS:   // 同上
来源：http://www.sxryk.cn/163ejsbzkwi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163bitctmss.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tvtnzsqf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lixvflkr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ncsntmvg.html

================================================================================
来源：http://www.xuanzx.com/163mylqpbgy.html

G. 面向对象
来源：http://www.sxryk.cn/163xbklkrmd.html

================================================================================
来源：http://www.aibaodan.cn/163qgeqvtbb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rqnqzbjb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163eryvmrub.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lqceozod.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kjckbsvs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gfxkbjbl.html

Java: class User {}
来源：http://www.aibaodan.cn/163qxnpruap.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163aaxgcmpi.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jkkicadu.html

C#:   class User {}
来源：http://www.xuanzx.com/163nhhltvvh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163myqcxsvd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rfljozqz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163upyqudpb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xyxnxsda.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163isknvwog.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163eaqvabif.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ykhfrtdf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163cekkankq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vmflnjnz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hzwevjql.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rdgwosrd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hibszxuq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163egjsrror.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163wzcawght.html

Java: private String name;
来源：http://www.xuanzx.com/163sldetvso.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163uxgzukzx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fqpjqppz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163axzcyovs.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wwrsmlxf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hdfhzspd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yswfejuu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ciqypdxz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ybwcmcxw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163izdiqxtn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163febgmgis.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163vuwmkeqq.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ugqjhzum.html

[G05] 继承
来源：http://www.xuanzx.com/163kxvlznvf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bcqmbfco.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163oagxlxfd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ywebmnfr.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gqnjkvwl.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wzrnoqge.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163syssqjvb.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ifyeqcaw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fjxstjda.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mmrwceff.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ljzezjcp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fbrlhsin.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163sinhnwql.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pstkzlys.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jgyfzpww.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lbzorbep.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kebqdzbp.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163iatvkukx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mufmtsxk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163qjcgpbnc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163shjpwsyv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163phwetqck.html

TS:   super.greet();
来源：http://www.sxryk.cn/163sylsryrn.html

Java: super.greet();
来源：http://www.aibaodan.cn/163iiiprrug.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bytjkkkr.html


<!-- 参考信息 -->