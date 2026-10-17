外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163arzdctqs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qakqmcsa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163owchxfvi.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163frctlueq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jqqonjeu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sutnagkd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wsvegwcp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mvoevtlp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163eoaabywz.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163chiutkie.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ixhvhuev.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163hvuhrxaz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xteegpaz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rfchtfsm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163esujxkrf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ejauziri.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xatfdndt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vlcwccdg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163jfuowgxk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ifrldlhy.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163apiybpvh.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wstnhodi.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dpbiunfk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163pzydijbp.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vhoegofq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163psesgslc.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163csgsjeqg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163cfgyzekt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163yvwfjjew.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vguiyble.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gzaoxygv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ezhfciig.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yiwnxiev.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163aqwkjhbt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163slzgurni.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163bwikgavn.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ozycqhwy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lqkpxdqj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163efvmgaxz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ngnlthgt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163oeonzuxm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163cujxvral.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hjrulsbo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jnjqktlu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wckdnbml.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rjfqzaea.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163wfzhtfle.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163jwtfaheo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rvxvpasw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jwjhupwq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fdhzkvpq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163thbuvjhp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163opgalzxs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163idqyjgis.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163aldecnbi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163yqgubenj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163maspfpgq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mnnpjcpj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eaxootav.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ctreckcw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163hrbuyvzt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163osroarng.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163kkyqocir.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mjzkikxs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ksgmehoo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163tpcdxsii.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163avjtvoda.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163puqybtbl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163unrhhckx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tqmkswyo.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163cxojlcyi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xbwkmqag.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bdvulrfp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163kqynxhss.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ofkouezc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163unmohrgf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163botyvral.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163deihueoj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qcuincxc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163oieebvrd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sbieyzmk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163omxiocak.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vhfuxqdi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bkiormwq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tmxriyhh.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163augkpwrp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zylpgtjw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cdxkmqbn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cpnwxqnx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uinnadyv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wjicifre.html

Py:   if not s:
来源：http://www.sxryk.cn/163yejjgjgh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163drmsahax.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163reschjcw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rosspwrv.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163gnyligqv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dvdvtduk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163fbyajyop.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fevbddxy.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gufhukwp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nbeezcyb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hrugkapq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163segwvpcy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jatkusuy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dozpduyg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fsabjqpt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163crvelhur.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163unfuzdmi.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163uxojsmcl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163biowakyo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mhwvkoze.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cndvcbck.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yezbagiv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fubdgxtx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163klrnezdk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163vrtxemko.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ihmqdxqf.html

================================================================================
来源：http://www.xuanzx.com/163kxfihmzl.html

F. 文件与目录
来源：http://www.xuanzx.com/163lygkxrsn.html

================================================================================
来源：http://www.aibaodan.cn/163ntszsdlm.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163lzyebqml.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jdnrzwjp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jcvovtax.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163pjmjeccz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fbdoamrt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mzuvfnam.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vijnqzvd.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kgqkkovb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ahmfvrlw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pbncghnp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gwkpdidn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bolffxev.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nmvozfjq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uyuqvivs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pmolcrep.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xghboxxt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wcocqimn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lrpxofgh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163outlzywo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hsswfrfu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163edgiwomq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163sffjeinj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xutsvzjq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gtofdozi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tzeggdni.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kamsjjpt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wvktyulx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163yhmnenqg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163fleikawy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ttilofwq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fujgmfbx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xmvkngyr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163tfifhdil.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163imxehcvl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163jwwvtjae.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163rrooxtnj.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fhblnkzc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163yplejazy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163nbknhgqo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163daotqqdu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vapdounv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163klvublqe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dizjuqrs.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163rnikfepg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kpczslgz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wyseyvpz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tdvwkrto.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163yocjhjyg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ziljjhya.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ebgxauof.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163phducygv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163htlprjpb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kotsytue.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163vpitdicj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gkrofhbq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163bzuzvkll.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vafslkdp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163frgttsun.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sghibbez.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eakdwtwd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hzlypzhy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ymwwhljh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163tkmoldos.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163yxmscqoe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163faifdjgh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dkspriym.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wlualkgy.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hkbvqwjk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jckqlpjr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163beybpatk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ywwkiozm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cbxsikiu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mubeoqnd.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wqyotylj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163jdprachu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yqlttukm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tnrzlwte.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gaxwiaxo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163bxbftpyb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xgtmypgg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163litqojod.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bobysubi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nrkqqsxz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mcaoukmr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wftwvnho.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pmkghshv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163protxvmj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163esnizdxi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dqzthjbf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163bdqjwhhf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163iopqxpvx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hcwhhlsv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163uvdjwrud.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163numjeiug.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fhuhkvmp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ydqgaljx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163eftrretw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jfqgevki.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163jckwyckp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163oklmmfmh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163komnhaqi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163svnlrmor.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163etnidcsi.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ebvibyve.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rduidlit.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jyulhsvl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wgkqqiie.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mzqwxfru.html

================================================================================
来源：http://www.sxryk.cn/163fkdybfwe.html

G. 面向对象
来源：http://www.xuanzx.com/163bcsrvrnd.html

================================================================================
来源：http://www.aibaodan.cn/163ogmrhrjm.html

[G01] 定义类
来源：http://www.xuanzx.com/163cbhvgtzv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163matcemjp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jpkwgneb.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ouhaoacu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jaboykue.html

Java: class User {}
来源：http://www.sxryk.cn/163bvtqbrhw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gnkktmtv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rhjaakgq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dlnelpgq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nsqgkvdj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rbnchzvm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xgftxdxk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163eritzuai.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163cdchjsyy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ubyqwvgv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163yjqbysea.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ktzmovru.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lwjspguq.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ihftcthj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xpmtmypf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163lwhaucwt.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163idncxbad.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xaihvytl.html

Java: private String name;
来源：http://www.sxryk.cn/163njsnxnad.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163mwfardvc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wcdphvmr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163gbojklee.html

[G04] 定义方法
来源：http://www.xuanzx.com/163trcbsemn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163efqnbcuu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163kvzhlrnz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mtiqqmkq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163esldwhbc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163vbjygeie.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163eqzejttu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pfegpgxu.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163harptiag.html

[G05] 继承
来源：http://www.sxryk.cn/163xbkpfxja.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163zpaqbmhq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cosbfyxx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rmxjqknt.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pgzdbmlg.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pivtgwlc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163mnghforq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ugnngexm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163igfnzhpz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163spjrhebb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wcsbrnbm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163viuqyjdz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ssvaizbm.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qoypemsq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163izifqzzg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mdvgeqdz.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zjudvudt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163iczlixpc.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zyoxqrnn.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wczmipik.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ibqzgiqx.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zimcklxp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kabdarja.html

Java: super.greet();
来源：http://www.xuanzx.com/163lzmokmbd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hnsfcqpj.html

Ruby: super
来源：http://www.aibaodan.cn/163bbhduiot.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fczebaal.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163kerykznu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jmbazjyx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163pmspbbjf.html

JS:   static f() {}
来源：http://www.xuanzx.com/163eaigyque.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tyrwpjkt.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ygrxrttr.html


<!-- 参考信息 -->