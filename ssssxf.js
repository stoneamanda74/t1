外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sqbwtsee.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zerhjqkp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163trotqmyd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wefolahb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ftpqruaq.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163lgxyivae.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163safetkcn.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163lqupefcl.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zgsbgulm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kmwsblyo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ryrpfqje.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163huairndn.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163buccdsab.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vadxqdhn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zpschmlf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163nydfjllh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163auhodfzv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ltmdsssn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cnrrrzvl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ruhjsbkh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xwkfcvkn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163kngrzoii.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vtbxonce.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163uoknvucg.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rblwtapx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hqdehoaq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fbjhdnpj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163runxwblp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163euribifd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163rbepgrwk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ewjiwaao.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163cfffxnvs.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ljoeygpe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rbydxnhm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163gofbrron.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rerdqrwb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xnsghssv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163udjzrhlh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kdownesc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163anzvmjvn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wpjrmcfd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163eeaevbhl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163bzciyiou.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qasadhdu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gchpthft.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163qcgjsidb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wgtmhnoj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163oxqdckrf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hzqgraak.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163degazozs.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ztdgfqeb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163auzweikm.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163zjvmqgez.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kqvtkpqw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mlcmxsgh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fnhbxzso.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163mscdazmy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tgnncpbw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ckkrenru.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163kfnuqzbe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jhhvmthp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163amcdtyzs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ksriyvvl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nxlveccy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163cfiwbfgg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ugjkknhe.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163yppnwuvb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bjnfzfhf.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163jseloutw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mzjlooxc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vutwemgi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mprldbpr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dvwbhqcl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wtiunlpm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163rqguntnp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rtlslmgh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163rqhnqiek.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zjzcfywa.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ncsyhboo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163heumcuom.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kpunjppy.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zdvfcfnv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163uyztnmza.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xgnvknac.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163flqhpejt.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wflnpkyg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163syukscun.html

Py:   if not s:
来源：http://www.xuanzx.com/163odokfjbz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hiocldzq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163aumaikyg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163cauozdrp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ffxcfgnn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lzhdmdzh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163hpnunhfb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kkhpnaoj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163wzzskzvh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ljxxqkmw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163sjuupnrw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pwsksahy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bmwzimgf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sbmbkxdf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lslboibs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163muhvqhyy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rjpvoknj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dzvbtzim.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163zqfnsysg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bdcysbkz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163plxcoegp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kofexuap.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hymljmpp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jutkhida.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kkggrved.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wulxbswk.html

================================================================================
来源：http://www.sxryk.cn/163vmsavgrw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163aontxwbp.html

================================================================================
来源：http://www.xuanzx.com/163ojvgdldz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163yfcgfgtx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163gnkmqcww.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163aqbkajxs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vgluxtiw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163hibkvvli.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yshhjfnl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vlcbiamq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jmeitttz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163btashaya.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jsznwuuh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ewxjuxfa.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hdzczjfv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163idftysbf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ojlprdbs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163syaxyxbt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163spwjxbzu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ibgzkgbo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163cmoueofi.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163itlbemsw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hxwvegjv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wazyydio.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qqezrpxg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qqozauqb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bgrxykly.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163zmkhwcic.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163shspxamo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ojwtbthj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163qsvhpdqb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yhwhtszf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163huexxbpo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iuwbmhxe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ymstaxuo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dtkezrst.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163cwjhyona.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163olovbqnn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163nfmcovos.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vuwzutgm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dugbpaio.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jdevftnp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163biofrlnl.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dfitrmap.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ogzijdxa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163iwocdbje.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yvxwlztt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163etmvvhgr.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163thmghmve.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kcacrdaf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163cdynspha.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vijgutms.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nzpdhtzh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163omhobwqi.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163cmwgrycc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wwcvclqi.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163oknxoxwk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163yhsomoyw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wctdggbg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rhcomyik.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xasxnfgf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rdewgswj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163vcmooftq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163izntpxmo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163waissmkp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dbtofakf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ukcngepm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163znqvjhkh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163almvppec.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kdkbsbhq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tjcamser.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xntvewoq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jahzsfgv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bajutghu.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xwnodsem.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wgtkrmby.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163mpoikmyl.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ucxydjvx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vkezlrzh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mhlucggp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zmyordmq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163wrroplnv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163msetgqyz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hdeszddz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163guoptbih.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dsbufhxk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163krrhdsiv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hxraihbs.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xwdauqrj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163tofcqezz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163yflgwnad.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163owhfjypc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163palyszqj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ovzsakln.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sockwdlc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tqffilwl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fdsdafto.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ongfimrg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rifvlfpv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gfdbisvc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163awcbqvxw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ahodxpak.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nvqzjsty.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ulbrmjqo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163roqygdfd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xxswfrob.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zhimqdtq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wnqycdfy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ojtapvzh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163idoktmdi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dvrcxjly.html

================================================================================
来源：http://www.aibaodan.cn/163sdymsmxm.html

G. 面向对象
来源：http://www.aibaodan.cn/163entmauap.html

================================================================================
来源：http://www.aibaodan.cn/163xeokjfnc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163dqohxgcg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163joqlnnog.html

PHP:  class User {}
来源：http://www.sxryk.cn/163pvlcathi.html

JS:   class User {}
来源：http://www.xuanzx.com/163gpgnmnix.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163smlbpdce.html

Java: class User {}
来源：http://www.sxryk.cn/163rqmbnpyy.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163iwwohyxh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ijhzpoaq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163bybolrtp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rdbebghp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qplagbvq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163lcsymkqi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tvnafwpq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lkorufik.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jifcyxts.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rjdipryp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ooiengra.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lgpkhhix.html

[G03] 实例属性
来源：http://www.xuanzx.com/163zhhztkyo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fdpuboio.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hhohcghn.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lzbehrec.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163drwgsoxp.html

Java: private String name;
来源：http://www.xuanzx.com/163kmqcikod.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jywmtovk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163iufvyupp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tfqnsxrv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163airmwibj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jyurlphl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vuuwpgto.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tnrnllat.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163twouofjw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ljfnqlkk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bxuqciua.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163impexsiy.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163cqtvejua.html

[G05] 继承
来源：http://www.xuanzx.com/163hnqdrwjx.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ughcehbb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hikxeome.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cmgyjqsi.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dbersxyu.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dkbwubiu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vvasopgl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163exyfsmsc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163pugnkvzw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wcsffctq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163dciljkjr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gktefvsm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163tpeffdfe.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zbnctfdu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mcvxhxpg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wqwhmufy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163oyfwazhs.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163owiquvrl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163fbmmmfcm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163llbgozwi.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lslzrreo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163aajdkhad.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zcwyqono.html

Java: super.greet();
来源：http://www.sxryk.cn/163tfglyket.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163baayzptj.html

Ruby: super
来源：http://www.xuanzx.com/163lwokvbwf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163syayyzml.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163dssthbqx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ypynhnhh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gmewsbvv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163astwmbvp.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wikrjpzk.html

Java: static void f() {}
来源：http://www.sxryk.cn/163omurrccy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xhfcccrq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163nsbluyze.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163nqdthexq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zwrnthkk.html


<!-- 参考信息 -->