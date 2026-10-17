外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fwbsvkdr.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vllraxyf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ggzgkmhu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vlmbjsdc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xagafyzc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163rspqqlhu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uceiggns.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163aupjcbxl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tjjgdjzh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163kcmdshkv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wnulasrb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163tqecrkdy.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163norjrogz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mhzdkhsj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163kvqmgyzp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163elmxnfbj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163lsmxsnvk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163wkthvrtc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qxyihpnf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ymluqvkg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ukbdwiea.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dzxvptaq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mydpjeob.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ztgvdcbd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163uqpjgwzb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hdoatpvm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163tdwspvpl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vubordyl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163kcocwnxe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163qfxrxcag.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ubfifxfu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hqfeikan.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163agnhnlvg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163uygjkthh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163azsoklmu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163mcqnxmxq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bftzwddi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fkjcohch.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dembfifn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163trpudpxh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rpeqqyzk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ixuhevvc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pmoaauqj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ntgcptyh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ymdpkoqp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bqtqpjwc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xqtfqqrt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163njokntir.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xvudhdaa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cnjswfal.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gkylnosy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hzayjppy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wmxludzh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163uahjnbqh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qmehfkju.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163wczhijfa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163vyhznrev.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163esnhasro.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163onlmwmvc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kxnquhxv.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zwscfkoq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qocnzteg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gxlzfvsi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xnkwhihn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163fzbecrap.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vpobfitr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wpfscwdr.html

Py:   if not s:
来源：http://www.sxryk.cn/163aoqjcqzx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rabveqpv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wdbkewdy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rsdybmba.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rykrqpjy.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qthyjkqy.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xizcrbhg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163uuohprhf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163lfnkqtew.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163uzdjxscc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163pfqqzejf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dzlmbtsu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wezmuckr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pstkwdlv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163keyyroyn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163olxnisfb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qcxdzrhb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163omkdaunk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rkjdbptx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163uaneioay.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163smfyjxfy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yvaavvwl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163znvicnvv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163zzwgljjg.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wqpyxzsw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163neyksvxn.html

================================================================================
来源：http://www.sxryk.cn/163vllvgiqr.html

F. 文件与目录
来源：http://www.xuanzx.com/163qxcggqcl.html

================================================================================
来源：http://www.aibaodan.cn/163mtyeyxgp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gzdnwxgf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163enhbxpkx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cdqorjxr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163lohymftg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163takhwona.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lfvtzlgv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rwywongp.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163cntozsjv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ccsplazq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mhejsddl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163kvplptdu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ughfiiha.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ueweylzh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qkgnbtax.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mmqbgkct.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rlraxjjz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163titgkumh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wgdnnxns.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kpxvauct.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zvmgjhty.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dfuxfkni.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tgrpprkl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ewitsypb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jsuvidzg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jbqfiave.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163gaodcian.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lwllzqib.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163illywpoi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rjstsonv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163rqtidlnp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qisfurzk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ztpbajks.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163yppeppgd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bmmpdnyi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163aootlyin.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163cmvyhkud.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163czpteeyu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kjpgddkz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tzlgptfr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qgceazxp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sdclzzta.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zaonhueq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mwceszez.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163amyhogsd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163llybmarh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hllfgpnc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163sqtajtxl.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163udeknwzf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163olnrxcwv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hxfwcriv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bzgeyoyb.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sowkuqfg.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dazsdenx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163hbbypfiv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ojomtdrr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lvzzotzw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yeglnkta.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163squulrvd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dnxpbhpe.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ifavfslr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fnxxkkip.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163gvggxybh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163aelrholf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zldwzlrw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jghobyaf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fvlbopct.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hivgotly.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nhhwimsg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rmfptkxo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163msoemxea.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163mwjbanpt.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qavhqlma.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163tkwutzsv.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163cnbsvgst.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xxixermp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ejbiazvy.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ydrxggsv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wioghlil.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mqocqxex.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xelvnrvz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lycdfeko.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ctbaiqmr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ysxyvqlg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163btudezqv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jmfcttbg.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aaopvfxb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ievyslxy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fgouvugi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eowdncca.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163rjvdxynt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163havgtinr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wcpsjvfz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lphuetwb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jkttwnmm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163erpudfvp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163etreisau.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163fcxezpmp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sdikhzxu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163macioafu.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dwkrtyih.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kedydimc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gehprneh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ijvqlcyw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gfrqztjl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zeucmjhw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rfqblmvl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163syvxznca.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163chrrxpsr.html

================================================================================
来源：http://www.sxryk.cn/163tyshkvgk.html

G. 面向对象
来源：http://www.aibaodan.cn/163iyxosthk.html

================================================================================
来源：http://www.xuanzx.com/163ybhcuzco.html

[G01] 定义类
来源：http://www.sxryk.cn/163qsprjnek.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mzefjjty.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uebposrj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yustadkq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163tkrsjalg.html

Java: class User {}
来源：http://www.aibaodan.cn/163ydapaplo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163unkvidmt.html

Ruby: class User; end
来源：http://www.sxryk.cn/163nfhrkjgr.html

C#:   class User {}
来源：http://www.sxryk.cn/163wfagvhwo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jvvtqlvh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163gpxuywiq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163nheyswob.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163tlsbhxli.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vzxyverc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163borbgbhb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dvglyfob.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163uzhkfuaw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163djcoqeri.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gfuemfff.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zvryekkd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dpblmoqs.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sukjglft.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ridinpwj.html

Java: private String name;
来源：http://www.xuanzx.com/163khazqday.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ywoayfvj.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zwhbitnr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163gblibvmg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bycdcvxj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hyyjxveq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mdiufkvf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ubjdrodk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jwilyqjv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163gfsntcmk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tuzbcfcu.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163iwbbhkqu.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cpzbajrz.html

[G05] 继承
来源：http://www.aibaodan.cn/163uujkgdzs.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zgilfqxq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jyeqzebe.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gbrzjlyw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mzwbbuxx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163bquojcnd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ylzrmvra.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163eqplahqf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rtvnyypq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163akdcspmm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163urfecdrv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wxecpqmy.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163khxxqftp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nnevabdo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jjrvrkht.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ipfghfph.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nsptdcrw.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163emycetii.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ahyausti.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pjaemywq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pmgjkaug.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163htqqlnhi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lxnpwlgb.html

Java: super.greet();
来源：http://www.xuanzx.com/163ekfqqurp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xwzdlims.html

Ruby: super
来源：http://www.aibaodan.cn/163eyxqdisa.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163flgejkwi.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jqqopyjm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tbulzull.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hyqfelok.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lcpdpstz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163uvkoygco.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mcxvmylf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kbglyvgj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jcbvrysl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163noaxuiun.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jsguyjyy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163utzldtty.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ppsrwgop.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163btwpjvzl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hgbbxzev.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163kgicuxdb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163uwihpxwe.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163knbypwlp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kwdpzajd.html

[G10] 访问控制
来源：http://www.xuanzx.com/163prloxcqz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163kcxzuueu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pnblcqwv.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163njbvwuur.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163conyqdgf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dhbjrfcf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163pgdkiyad.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163geterypj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163iecdybby.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jhzppyko.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163jtfphoiz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rfxbohoa.html


<!-- 参考信息 -->