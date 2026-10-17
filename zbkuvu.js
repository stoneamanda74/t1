外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163neztafrx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wubupfsf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tlzkaluh.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kbwermse.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kcojwckm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163husfcnkp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bzjoxepw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fhuiqwkd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rvysnzfh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mrucforr.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163fcbygezs.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ghzfocgz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jjlqzrjw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wttmtagj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ntrfisey.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163czovscsb.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rrwxftvu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dhchlvjf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xmnbyncn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163nuxdegvx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163epsvykcl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aydkajxo.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nsdwmjue.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163kagxtghy.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qishwcag.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kvycqzub.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qcxmhbvh.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cxazyomk.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xnxxvhks.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yqvgrhqr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ebcqdhke.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xbffpklt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qjnelqzw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ovzzmuod.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yblscfyn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ivlbfnca.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163msturluw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163sjokfbtv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163iceahlwo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jocubjem.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163dvjvgwci.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wznfwbkf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iotznbns.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163eywtdbvz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ebckwdnt.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xwlgqipm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zpkfdnra.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qhyrszpf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bfvgrdjx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163nmnmaxue.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wcinykhh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hymsftvn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mykkknmj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bjzwklxc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rhiuppbp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eorovnyh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pukqxncp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163znlmcrne.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163axmboyqy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163csirkdvm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ilwnrysj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pkxjynjj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163torkzatq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xgvwofpr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ivptmmvt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uzxeuzjq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163lkyeyuvi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qinybhku.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kwyklwng.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ypybmxdg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163swucfnol.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wjuclxls.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ateviqjc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ihfsemcm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wlwevnqa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kgjcyypz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163khtzibhy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lcerhmio.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vhvvdjln.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dfishpbe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rwmzrtxy.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rqiroodh.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163berfzboa.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ohpsyadk.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ttfmxexh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gblbituy.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163umxuleod.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163reowyzxv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163kxkdohjm.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wnidqzlx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mpwardfq.html

Py:   if not s:
来源：http://www.xuanzx.com/163nreokqrr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163lumubzhm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163yfgnamtp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yskusjci.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kztnsvnm.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163fzyxlfwf.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ruxcmncj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163myltsxrv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163khqfugna.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163aqajapnt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hdcwsgti.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wxjdyxsr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dpdlxaxw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xaptvmjt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163njnsxwho.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cxktvfgw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163jckdrjhj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163frgvkzto.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pbrvceqv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jozafwtq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mhphuyha.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iyggpnpq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ueqqjuzl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163wlduxpdm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ixqsdsnq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163mtwnuihs.html

================================================================================
来源：http://www.aibaodan.cn/163yjjunimd.html

F. 文件与目录
来源：http://www.xuanzx.com/163hetastli.html

================================================================================
来源：http://www.sxryk.cn/163nfcyxtak.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pthnqrhi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gxodlfou.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163eosvaqtz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dcatiujb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jrowohbt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oocfstcs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163othdijiy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163adrzzinw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163dvknexsv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yyajtjll.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vuoolvbb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163nnryfboo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163blebcboh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xnjnmfju.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yvbbkrfw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163egbzyfod.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rgivvzqe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fnmmmaqz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xtnlqbqs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rzbdxrrt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ntevqqja.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fsbdchxr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qdsjebfq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zbowqypc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hcqcusdh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163zadgeuao.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163onxdrktk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fgyzturh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163swidchah.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163rwuypumd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163odvewrcd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xlvhrclb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rrbjsmgc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jdamvppq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163byzllnsx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gdsnhodd.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163girouyah.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163egmcahre.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163qdkhpfya.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nrfpqjuv.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tovaqwsx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iavxdjwd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163nsrelxmq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163odqzewaz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163egdkeqfz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mixwnhvd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163fgvacdoa.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tzasvvkk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163faplmfpv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yfctdvko.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163asablenz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kslsswqp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ecsnwuek.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vypppjkn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ghjllroc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163orhfsavx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kacybxro.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163odbmulpz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163penwofqa.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163yajcpysi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qcrbgsti.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rximmkdo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163udlaxnpq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ragdgabl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ibafhlae.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163giozguvq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sswnyujf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ghymcyli.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fntycwdf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ruuvhfdp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nwjvsmny.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cpvzrkbr.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tljgzbbh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pizzgcpm.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dftsfthv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ztyurqmh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wkmamrqh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163smnchzup.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jmwndfrm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163kiuwysus.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zxonhdxb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vmihpucr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qtupktzm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wktkbszq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163evsqhhlk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163eohqpgrf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163eceyekhc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qifkkivz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hicazgtz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163mchtszbl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hioslmgo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rwfsdsgi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163viwfkpgz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163suxvpfnn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163luzjzyhw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163cqsvlbds.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163eminwejb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cxfknbgp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jttztsuq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163udgpplaw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kupspcfp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qtwgghme.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qjymwvgi.html

TS:   // 同上
来源：http://www.sxryk.cn/163hnemgkgl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gpgwnwlu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163invsrxbo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jiyhyufo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wevdmeot.html

================================================================================
来源：http://www.xuanzx.com/163bbkaishm.html

G. 面向对象
来源：http://www.sxryk.cn/163ldtebhqq.html

================================================================================
来源：http://www.xuanzx.com/163dfgtcjwq.html

[G01] 定义类
来源：http://www.sxryk.cn/163xtrosrvz.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ihaidxev.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hwlgoymy.html

JS:   class User {}
来源：http://www.xuanzx.com/163udktsmps.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163udbjbqja.html

Java: class User {}
来源：http://www.sxryk.cn/163qrdtyfpp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kedhqhzu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wyhuzfdk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163huakpigv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163simvfbhq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zcsfmnwr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pzohyzzx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lexikstr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rfegkxwt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qyhmjhuf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gfahszzi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vufrydri.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163izwhgkou.html

[G03] 实例属性
来源：http://www.xuanzx.com/163lroqmnak.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mdpfkqvs.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dsypygip.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163awfqibqx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163zzjxvmia.html

Java: private String name;
来源：http://www.aibaodan.cn/163aptfnszh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hhpslfyg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fdwmkcjc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wrjmbcco.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163whdaxcso.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163coosbjby.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xpvtijpd.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163figcqynw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ehybxiyl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163swliyxfn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tliqbhrp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163trzbrztt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wtepwpzv.html

[G05] 继承
来源：http://www.xuanzx.com/163lzwjaber.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wdnuluyb.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163oehqigdx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fnmvmslc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qglzakgm.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163llkmdoim.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dwllkhtg.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vpaolpgd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tuujmxeg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rfyuspmk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163volkhjqi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rmesemej.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ifaukdyq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bhrwzyjn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rcigtwzu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163syfhcgaq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ofqvzxlj.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kzzphbkb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tquecrot.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163leigmhrq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163srcpwome.html

JS:   super.greet();
来源：http://www.xuanzx.com/163whqsogzw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xfzkyeoa.html

Java: super.greet();
来源：http://www.sxryk.cn/163lqnqqyuo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kfpyywgl.html

Ruby: super
来源：http://www.aibaodan.cn/163vzzxunei.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163acwykatf.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163leynaxiv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ukgcsmgm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163aklmwuvh.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gamqgxqt.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163nklhwctq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163whtdpfqs.html


<!-- 参考信息 -->