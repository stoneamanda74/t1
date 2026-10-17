外链999!wailian999！

Ruby: s.reverse
来源：http://www.sxryk.cn/163rfknklks.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163axnerprp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hhonlftq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zaxaqgvu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pxqjclup.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dxlyoipo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qlexgjqi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vrsfwvqg.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163dwfspeyt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163snmzgcan.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163luaihsxl.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tncasdza.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nzoqsmeu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jozlnppl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xewabsqy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dkpffdcy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yuyqrxuk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dqfhvtrb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163logkwavi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163utkvqqyr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kvkpenbg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qcssvfdm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ibaaabxu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163vrjdctav.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163yavqiysy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nepyvvhf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ueohemfz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163nnlgnday.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gfwhlwdp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mrqtccvw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163lzmaulln.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jxpndcbq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cmalmkok.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163bysauofo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qnwgfziu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ikiiqntc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fjsueyfk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163glguonli.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ozyuovzn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163sqvrymqd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lvxjcyrh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ojtwcggl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ypippjaw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163aohbuwne.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nhfrvudl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163rxkrnefi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vqtyouqg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cfzucabf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163npqyefkv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163buphgcyj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vfyxnklb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jhghatne.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163juiudkak.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163cjplhqfw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qcuwwmsl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qcudqohb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bsjkijbd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163czfudaig.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tvwbsejt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163axsktkrh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dnffxukx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zvtwgqtq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dudpxomk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163suiflduj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rbejzqaw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ygastfmx.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ftwotvqh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163thtsjaet.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kjrwryxq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ifdagsla.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163nnmgjkiy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dvdpxcxf.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wizbkonv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jkjzzmyl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zcjrzbai.html

Py:   if not s:
来源：http://www.xuanzx.com/163munyuphr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hfrixrhb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hcrcmtls.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163epdixmgj.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vkwwjhnd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163grjltvhe.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163emagofzg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cjjjecls.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163axrkreci.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163tjeydafa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gdqfmpim.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dzfyngwn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pvnkgdjp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gginsiwn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ztuqtoic.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163gqjxufxp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163mjnusjnq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jrhtdbxc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hhbgroyn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vhvkmgqb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kzvuejcv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cgkfthcr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rzgcuexo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163idamrqnx.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163grygczyh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163pbdrykdu.html

================================================================================
来源：http://www.xuanzx.com/163voxqgdoi.html

F. 文件与目录
来源：http://www.xuanzx.com/163mbaikxby.html

================================================================================
来源：http://www.xuanzx.com/163cqcqtghq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gfklwqnl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dzlowdsb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163pcygutck.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bsqlhigg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pbgcyuvp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ejatcwwm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163rbmrgccv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163nisjxhcv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jgzxzeim.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163wwfnlekp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xivceuwn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163aasyduux.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163syqpypxb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hrpxewmz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hserkyrz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xnkbdrgh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163pyefpvnt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163npjvyvdg.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hqbixjae.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vtodgemb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lcmhieds.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ptlzsvbw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pxpsypix.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163kxpxhtih.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vujshvcr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163alxxfpfj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pltwjvmh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ouoohcwy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163wvcrycdm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163kzwwlwbf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xjunnmpg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mhzbzkoe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163quuagbgq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163crpwhqxd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163maavshmp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ihbclhgu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163zclgzwpx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xsboakyu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cxnhnylj.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jgdafnew.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163brilwvtm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163npshcifl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163knpicmgq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163feepacji.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lmyzemsx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zwhcfeha.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kraiuofz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163thstgwqe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mymdivgb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uautqjcr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kbcniqnb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pzysmmrb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163coditfnw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ukfngsbo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fscseevf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163savvlpmk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163fkclxmrr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kzixdrke.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zonxytbv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hycubjky.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163joqzcnaa.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ztgaarqg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163uxbsthph.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ylbcgynr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163yaycixve.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kzabqgsn.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gipzbnqw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yfrkhrxm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gsapswro.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163myrcmrzu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ulydcgqr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ncqvoadp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vsrbfxyg.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dtdwfnev.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163llanntrw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mdqjwyte.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hawezfwt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qkxkckvv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fkiwmyds.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163auxelccb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lmnbgkoq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163smqwarej.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163royyskvw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tjvabcft.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dctqtgvj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gpypkqvx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ialcpewc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dgtcvhyw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ypqulrvb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163owqugmmp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163qfpmkqlt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163obqqgsem.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163chdqyoll.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kfgpuckv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jlkcdfay.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163aioxfetn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163camphjot.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iyccfyuh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163cnoazffj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zytpygoq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jzsmqels.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163poxoygqf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163mrqlcdla.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qcfacbtk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163bsbkigkk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qmtiiles.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wjxgvxed.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vlolohch.html

================================================================================
来源：http://www.aibaodan.cn/163qzewetju.html

G. 面向对象
来源：http://www.sxryk.cn/163bfejaquu.html

================================================================================
来源：http://www.sxryk.cn/163yriijwhz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uiicsyyy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163dyobaqry.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gjccqprz.html

JS:   class User {}
来源：http://www.sxryk.cn/163tbxrjstv.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cmxbxltw.html

Java: class User {}
来源：http://www.xuanzx.com/163fmwicelu.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jqbcxywe.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163aprqssgg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163yxgpxvxt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yfxdjnep.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ajiyeyad.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163vhcuveoz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rtxtkszn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mmdexvom.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xsqaliex.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qabmlkfr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ndxioqah.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ximanktr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163nonkimjb.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hhdxszrc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vndbjvbz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pjtqgboj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163trifgbkk.html

Java: private String name;
来源：http://www.aibaodan.cn/163lfrfupel.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hkewbyvn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fbemnxsx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nggnpkxt.html

[G04] 定义方法
来源：http://www.sxryk.cn/163flisrmjj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163vfyhfepl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ecbakrxz.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ubyftaku.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163caqgjywx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163npjubybu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163szfdipyr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163erhxbcur.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163teznoczj.html

[G05] 继承
来源：http://www.sxryk.cn/163kjiiygwv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163egrjwzqp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mucmsmsv.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ezpgvges.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kxtprbnx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163umxkgzji.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163seomicuz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hhpvtmqs.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wlisvfye.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163owhgejzh.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jblfvesu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dccwvspe.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qeycfmny.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qcznclke.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163whxcafsz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wgagfjlr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163pjewnmyu.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163deyhtrws.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uptjtqkq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jzvsqjkq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xbqxpdtq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163vudblhck.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163onykctvd.html

Java: super.greet();
来源：http://www.xuanzx.com/163zlgcuffv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kahdrupm.html

Ruby: super
来源：http://www.xuanzx.com/163intitcaj.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ddegdfsu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163kinrjrwl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lhsxbzvg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gbzqjgob.html

JS:   static f() {}
来源：http://www.sxryk.cn/163wjhjvdzn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hvzenvsl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163hkfrdtrb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tyqcpcxr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163avzzickr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zzypipal.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163htvkmsmn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163aycoeszj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mytthwcy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ighhtsyr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wswcvlfh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163qilvofvm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163gleqfzqi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kmmqrami.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163jdaehxfp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163injbewgd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xfagrvur.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ihsigsaa.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gcmwdylq.html


<!-- 参考信息 -->