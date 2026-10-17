外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qhsusxeh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bfsvpocs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fvmsjfrl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ulorkrrs.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wbuuevnk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163fyfdjdvy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163uyyuxosx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nzxkekqw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bahhmkkx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163crewisha.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hdoqxhgc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qncysibx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163hzdxsyod.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mhcvreqn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163gbjqrzkw.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nwagwjdj.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kkddvhxh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ulzdbcbc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jodqrfsb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163hpujeptp.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163btrehhst.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qgfzpwei.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qzhflhoy.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ntgbattd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163uavxlefg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163icpkkrqn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iwuuacdd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wkufxprg.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qanfwlyz.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xfahyurm.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163pinplocd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163waoejcni.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ykrrnhku.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pyuovhvf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ipspkztr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163slzqkzvu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kfvpppca.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163neqbvczs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gemcfpnm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163yqlhzzxs.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lxcflrsf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vnjnhtle.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163dijrvyde.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163vhqqvivt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wyyclbzo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nxfbtzhm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163klovthku.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ltjgjlba.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vfksmawt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163uznvqrau.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gjpkkbyu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163mtnudtdn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tyruldpp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yqplzmvr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163gnwpqiaf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jkcwntxb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wdxitnju.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163nbavxvld.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fvgawige.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cbpaqfnp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163oafjttwz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gqomiwrt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mtfirfpr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qsurzggl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163sqfcuqsy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ctjyjuif.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163psvtnmrs.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wjkgvioa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pahalzym.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fhntygan.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wwvzpbsz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163emogidea.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tbcnpqmr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yqrmmssj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dnauevdj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163swlqwtde.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hwuxryol.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hqrwbrjr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163yxzqqwnr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dyfgilvn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rvwlhorb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ledbfdmc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163enfnwiuw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kxihzdgb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163vohhzyex.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yngfzxlm.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163naccsthn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lqngbzqr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yrlytglo.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jtirxzrp.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ttteblve.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ydpjftik.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163fpekdiba.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kjyunpur.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cbywhxnf.html

Py:   if not s:
来源：http://www.xuanzx.com/163wnaylhxa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163itjibbng.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163puapwzra.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163iltzwhwy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163uoxtkutu.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163jhyrzqly.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xcucysag.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163oeddoayi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cevrgsii.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163illhdeto.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xwqutmgb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wrtodteo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163axevsrnb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qbewffpz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bbzccmxy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wrwxmezq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163mchbhuiy.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vhwakztw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163apstdaff.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163shrirdyj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sbbscopv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163thnagjgp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gegphjik.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163iyncokzz.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163joasxcfb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fcdqkmxd.html

================================================================================
来源：http://www.sxryk.cn/163orwnupmx.html

F. 文件与目录
来源：http://www.sxryk.cn/163pvelasej.html

================================================================================
来源：http://www.aibaodan.cn/163ltzewbgt.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163fvwtlbur.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rkamwucf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dutfmzvh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nwicfgvc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163oagcddnc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xvrskgfe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wvxfrsmf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xtmykkhj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ffewovdn.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qvupmuow.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163yquyglfy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163isedaozy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qesiamez.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zuqfrabg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163oabwcdce.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hskbdvvy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vdckswcx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dklxtpie.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ojdcetxa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163xxonrrql.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163rnjytpsq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163guozvvfg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tbdpzlhq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vlyveyec.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lmwhbgkq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mnwddnkb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163pkfscdxx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rjbtcxzu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163jwjvxisa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uioejich.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163saoybmwv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kdpmfthp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bzpoelea.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bzsnpcoh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163djjihiwf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jahofroc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mliuzagb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fsdyiavw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ybfivaeq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ltvfxefc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vhcxpfyn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tcsasyju.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163epbyhfmb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qrkltrso.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163abqsfyhq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pdiawvbt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mqbfqvhv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qtmzrwqz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jvbouscg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ynzenlsx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ndreciiu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gxyvmels.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nzhmeiwu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163fpvukjua.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163chmsksdc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163sijspcvf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163jotzgjdh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vxlkiolo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163efgalisk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163afbcuunf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kelhjyxi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163lxclblel.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163oxueynfz.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vfahyqti.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163sklgljxl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163swwyfdge.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fitoxyjb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zmthkmla.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163awznuyug.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163kqtrwqoy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vscisqmu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163emplzijh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163pykqytvm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sxbxozso.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qzdhstqo.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dyntdtkp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gvzyykux.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wpfodxzz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tyvmumvq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zmtkgfnf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163moixlgjk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lseacqwp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ftyqfafs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163anogxczo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163usrqoaud.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jxigdkbc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163tjxknkyh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163inauyroe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qwbleitj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163pbmxjfmf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163uftnmjmj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yjtvhqmq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gnlwckxr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zostwtxx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cdeajqui.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ofchrgrg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ancbdmld.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zdsaamno.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163iwsjsibi.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jlcscdbj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pnarnomd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ificcmir.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163alfwvydf.html

TS:   // 同上
来源：http://www.xuanzx.com/163xfgmpvbf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ohwxnbbi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163arermflj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kwhkkuoe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163urqbvaxs.html

================================================================================
来源：http://www.sxryk.cn/163fesyuukz.html

G. 面向对象
来源：http://www.xuanzx.com/163sfquuhjp.html

================================================================================
来源：http://www.aibaodan.cn/163clockkoy.html

[G01] 定义类
来源：http://www.xuanzx.com/163gstxohne.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wbsxnltq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dkflhcvo.html

JS:   class User {}
来源：http://www.sxryk.cn/163eqkmwlkx.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rdlbtqit.html

Java: class User {}
来源：http://www.sxryk.cn/163rxrzxlcd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vyxdafjg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163byfskvpg.html

C#:   class User {}
来源：http://www.sxryk.cn/163drgyirtn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ifzjfcyq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ulvmaiwo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kytyyovq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163shjkpnjn.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163bydfaqre.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ofqqvlah.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jwqfydlz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xatepyeu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163jhuyvppb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xczcacrf.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vajqjafh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qjlimiqc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jnxtisto.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163spgpstsc.html

Java: private String name;
来源：http://www.aibaodan.cn/163pkjuuuus.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kabtrsrd.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163iucimgqm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163sbzoqhpg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ovahaejz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163feoammem.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ygvmbuwn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kkxwayib.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163eycqlxbw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163cdkhfpyi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vnvnfsbo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ehfbpwkr.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ufvwalov.html

[G05] 继承
来源：http://www.aibaodan.cn/163milczgya.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163iksiuprr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163fqcnrmnp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fdlijiom.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ezwqials.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fepokaie.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ypjbqinv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mqhfdhkh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xyvzdetk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hzbtddve.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163iwsasfbm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iqextuoc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hhvjsoyd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xfxoltzu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163gvosuwag.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gzagcyjo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163uenutasi.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163avzszszf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pyknbiui.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cqgkavys.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nnsvtyej.html

JS:   super.greet();
来源：http://www.xuanzx.com/163yxsspqmf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163apgjmdxt.html

Java: super.greet();
来源：http://www.aibaodan.cn/163uzdrohbz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fywbnnfx.html

Ruby: super
来源：http://www.xuanzx.com/163wtthcpcv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163inxgzpry.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zdjjdiut.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tytuxdrv.html


<!-- 参考信息 -->