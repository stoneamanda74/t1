外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pokffmoe.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163apkcalyu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163uvfmdtvw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xcqyknou.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hoiblsxy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ypqgyrpj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pdjniaem.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yriqoiwx.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vadjysop.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nmvttejs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wehrdikj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163flcwbwkk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qlqikwey.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tpzymxuk.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rmamsipv.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163bwrknfeh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163npfcsudp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tpbhfswj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nazwwmnb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163kljwvhkn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163sovkkjbu.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cbofesrv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163klvqisvd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jwszixgt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163yplrsjdd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fxmvlhuy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lhdxpxto.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vcyeekqp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cunlbnie.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163boqvwlgg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163djxgqjyr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kvyyqleb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kcqamazd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qzimmfsm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bilfuomx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163anrcahie.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163lgjarcmj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163bxejgdiw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163szofdiva.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163bfggcuab.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163srfkoqpi.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ckpccivy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163twbtkyhd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163htdwxbps.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163irxzjlwt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jqhhjdqd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163faxijvon.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163eburrktl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qmagvuqy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163zxjorrdu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qovpners.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163weekdhbt.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tuuhqhfu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xrnkigfu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dtiqnivp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163asmwkblp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163whorptnb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mdbbljfb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163umgcwlll.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mwbksupv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163tmthjsjn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ruonkvzu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qypnrmqp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qozszuar.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163upzfemtu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163gxqknhlo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rkoxduiq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gakgvhxb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163qnecouhy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rofjghzk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cneukexq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ssmyerzj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ypnagous.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163heaayecm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ltpsaqdn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163wmhmjxvu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vcczaawr.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ooctxngn.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qkqbxymv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tnslbmac.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hhowplau.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163sgmqflzs.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kniabjnq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163tmkaxiyk.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163jsqegagi.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wgkpjcof.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zdowpgwr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vvkvezgo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ieixqsff.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jgxbadvk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kbgdnxpl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lkyrsbay.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163gojzhohh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163minoflgz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vkulqios.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tejtyeni.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163utottxpj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zwgdvytd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lbyqiqec.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163icnalmyd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gvypblvp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163wmwovebt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fwpzfhdt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163daoacwsi.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gzjudyip.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163gdqzopeh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xdtlmlmu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ajhcxgsz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pygaeoue.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kzjtjacz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163eeaeeejk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163subkfjwy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163eifvqver.html

================================================================================
来源：http://www.aibaodan.cn/163vnmaflzf.html

F. 文件与目录
来源：http://www.xuanzx.com/163mwbjyegz.html

================================================================================
来源：http://www.sxryk.cn/163kjfcyovg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163olxkwyco.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163aldgmfik.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dslyokjh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163edzchgrp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jvkijtbt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163julukqog.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rtjqnexz.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hjhzbhgp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163otpzxsfx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vhhrpeob.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163udgtfmiy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ijtrpqey.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dzhtwmjy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nzxmkwyi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yexpsisg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lpqnbhzh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zayryqqt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163idvmyicj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cswgflqq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163iawyoqwe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163sgjnegny.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wmxhprej.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rubnmipy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163nrqweqpt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163fxueuwgx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rnglzvbx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jtvbqvtt.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163legxskfg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yfsxmpxd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wxvyjbwa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tajznmkl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jdncrmqd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zkstycqd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jtfxqbby.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163afkrawls.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zujzgees.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163egdmmlso.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163alagazol.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vrecygta.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wwdtunuh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ydldgxor.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pmgrgozx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tiexoqdk.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jngdmyxv.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163evgeqjez.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qgsmgdtc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kwjdochf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bakbsbnp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yqcqrayn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wlyhcudg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bnzwtxqx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vfjjzshf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hccswgnc.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ygbamgzx.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163farcpfhx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163sflrbkmg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163fxjorytc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xnbphepb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163flwbtzdh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163zgmbnbxg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163heckojep.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163sbiwirde.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jayodfii.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zmuqratq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163tvpnehgt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163reklpnns.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jaxqyarp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gcxaefrb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uautfkqi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cuysvzns.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vkiuyvdp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vzhxlszn.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ojvzubbi.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kmzrnybh.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vbpsithn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vzgyebed.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163peyonnre.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gnhygawu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163pkvevnca.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vkdgswpu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rmdpawar.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ggeidumz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rymjwqno.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wsczgvul.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qepghdqw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mzheebuk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kadpynnn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163akxmootr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dvwpibxn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zrnxtbfq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pyjuqslq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rxqwynho.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163zvyzepzu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rwirkvgz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gqtqyuom.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163sneagbhx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vnvjzjin.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ouftgrba.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qsrjtorf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hzhglozx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163egjptmxd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163pvxenwor.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qxejfjgb.html

TS:   // 同上
来源：http://www.xuanzx.com/163eztyspon.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vrrqljmg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jbpfyflf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gnztywwy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163zuiokkrt.html

================================================================================
来源：http://www.aibaodan.cn/163ckaehcai.html

G. 面向对象
来源：http://www.aibaodan.cn/163iqpcfspg.html

================================================================================
来源：http://www.aibaodan.cn/163rxxjtdhg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163hxmmpsot.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zukjpbae.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bfboyhgn.html

JS:   class User {}
来源：http://www.sxryk.cn/163nwtginyh.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fgucubno.html

Java: class User {}
来源：http://www.aibaodan.cn/163hyhppeae.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163lxrdfezg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bopvskne.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cozjagfb.html

[G02] 构造函数
来源：http://www.sxryk.cn/163hdoskzur.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nmohxdqx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xhlremrn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lrjxrsqj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bjhpjtdk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163djtvpure.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163avooabpp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163soxfazzk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dbkwasst.html

[G03] 实例属性
来源：http://www.xuanzx.com/163fxazysap.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ybntpcnj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ynozpgof.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163delhkvgw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163omskaexd.html

Java: private String name;
来源：http://www.aibaodan.cn/163cuedwghn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gdhekjnw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163amjlmlyu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163hlbtttrq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163igxcthuy.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zwzkzlqd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ewhzlxps.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163aiziqyve.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vtbipvep.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163kazctkdr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163buhdmspg.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163hpgzgmty.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163haubeckb.html

[G05] 继承
来源：http://www.sxryk.cn/163xrakboqx.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hiqwogab.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163yqrdwvvm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wigvmbvh.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mzmycpui.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hxfctqfw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163mbxitziu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vncbitnp.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163skgchzwr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163pkbaxysz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163drsaekau.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xbgtbsza.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163baheuvrj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ulfthcie.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tsnbtttm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163mwfwwwbw.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vajiqcdo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dgdhrrdz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nfefhldb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ufvtqglo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mjqadioi.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jqcgbzjc.html

TS:   super.greet();
来源：http://www.sxryk.cn/163yubslwjl.html

Java: super.greet();
来源：http://www.sxryk.cn/163acsdnejx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rahvmuqu.html

Ruby: super
来源：http://www.sxryk.cn/163rxsjcdiq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pnoddqqo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ybusxgkw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yahnpiqd.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163eioguqcl.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kvppkvoo.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163kwrubwxi.html

Java: static void f() {}
来源：http://www.sxryk.cn/163nxygzxnn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fyascrsc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vjorbbpl.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wdjzmjpb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163gwelpvpn.html


<!-- 参考信息 -->