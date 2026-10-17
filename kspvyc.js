外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ypybvtbd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zhvmhleq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ngwjzomf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ycunkcso.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kqjblrmk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kilpxlth.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163zelrgorf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xmvaxhrz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vstbkegs.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163sovwnwoo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pfnaaiim.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vmfrnvqc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hyfgwbfp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163qajhttmu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163txuguqnd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163iaeaozyp.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163tirzrztg.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163pgothuop.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yswgizff.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nzrgssne.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zsznaqmm.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163afdvjymi.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hvphjlnd.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163cnsuagdq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163txqbiuqh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163urmefppu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wmbfrflm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iyqocekr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ulkkvmti.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mmmvxanp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163qtaqwkaj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ijgwvzdr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163fitsutyo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163duouqwoa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rvtrhghf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163aqygoiaq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163omabiwat.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ksppakiq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jlzamqzx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163asrqckmc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163qquhfqef.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ytiltlaa.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ywecikod.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ikblwuom.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sogoivuc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ypgqatso.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163nmddjzsg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vcwxfqvk.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vfwtccfq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ppppakli.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tkfzcgnj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163qjyqsrwq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163axykkjnp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nsecumgr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ttdhjpnr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ibtzjkas.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163unklfrbf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163cjwqwsbu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163yjuekgwb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lvlthqpi.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163feryzltv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163qhusgcrh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xoyeznpf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163glmngbuy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163rlzyifnw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fvupdggq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qevssdhd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163yvmyaurm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mohodedt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ehdihaet.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163fpdaluon.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163njuznoqm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pdaeghua.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pcnljqxr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163gavmchxi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163uoduzeua.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qajpgdwl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163sivgivjw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mwidrogd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pgypstqz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163opwqrtuq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lstimres.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ybuusgni.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bcfbzage.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bikziith.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rfrcutwj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ppnufakj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vhbrjpvr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163lwlgmxxv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cthjdsje.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163adrevuas.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dulnqfgq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xezoxhyc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ujpkodvs.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163udmlfgyx.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163arzwbfle.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163auzosfce.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bhxwrrdl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gtuxmnjl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wawxlenp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163xaiceall.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ukvrusnx.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163sswtxrle.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kcfiulyy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163zknqegnm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nprvaxse.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163dqmwyfpz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163flifuzyl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ptwhpney.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163basrrqcc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lstimjxi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mfotwiev.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163mbmlrbww.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mojsjcol.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lxpjuspq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163cjifbcpn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gyijvcnn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fkeyengk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163teqtnusw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qjpjiqcp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163nzoyrvld.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163erljkalg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jtipsakk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163gnrqznpd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163wtirclxl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ibqwwpoq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163hdwctzqt.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bgjfssgs.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163moqirsws.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163poxlrspg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jgdlyowu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tlparqkv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hroxefop.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163utnbxdgz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eqsmhfon.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fzmzouez.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163utguexvh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163uyzbmnjv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163stldnrjp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lbokuttt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163cdaowect.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163waqphkgu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pyrieokz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lwfehkdw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163grshemnk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jignkuut.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jvodzrsw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ejpitooq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ggnjodjl.html

================================================================================
来源：http://www.sxryk.cn/163luftubvs.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jgnhkxmq.html

================================================================================
来源：http://www.sxryk.cn/163shalwsel.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wkhzpfgz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jdanjdxd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163uimkyyiv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zhvpeyzd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163sutopvjj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163usrkayno.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lbiiabxe.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wrrjunug.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hviegwlu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vlgciwaf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mydphdaf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hvtpgpzz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rsbpokdw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dtzqankx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ovfbzxlt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163wjibnivq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zssujnhb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163qofpotdb.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163awubfpkg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163xafttqbh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nsvmtcfl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zlzemeeg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hbshynys.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ylkmvlqm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163osiwpyxs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163scefksvu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163yxsaunyk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rhkauhpj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dfqiykua.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ktjhrbbw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jgvlgqwm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fcxmjqjm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wxvctjeh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ibkxroqn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jfprigck.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rthvqwmn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qcwygiui.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jbymdviw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yzbnbzni.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uxjysqzq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hltjcwwm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kvvjzrue.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gbvjbxuj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qbidcnec.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163zgtpzmxl.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ktbxumic.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ifkpqbxm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vuhjsxnv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pxudwpme.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163llxsctiy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cmboltvp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163xcympihk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gtvgdldh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dgjxefbo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163yajgdxxe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xkqgtuna.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163iazbexof.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ywywyaby.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nwfhxcft.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163dvrsizwk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qsxpwfyz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qtzjwrrl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dztcqrnd.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163iwzichcg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163sookcapu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xmufqido.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uifdwuhf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dgqqteia.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163frrbiktj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ovlwghgv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qhgopkty.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163woleseak.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kecrnhyw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163gmoluvrm.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163czbxzuyg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zdixqdwy.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zkhoqvfz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ldgkikmk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uxjmuszu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163znlqryah.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163knpwdztv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163mmvpugrv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zspzjshb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hvukhsoq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nqvcgonm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163rtaqndzn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mazxzcfy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163swbhvgsp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gxnpsiue.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163kcocndiu.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lykyjudk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bdyztmbk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ljgjzaqo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jljzjtyt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ouzsqbrn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163pgkhzqyi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jrlcnfqx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ornbnzim.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vcgbamhb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kethackj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vghrkpnc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qwzlycam.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bgtdobxr.html

TS:   // 同上
来源：http://www.xuanzx.com/163hqtozwob.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xhlbztcy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qrvvuuue.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mldeqzfh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dqcgdhbl.html

================================================================================
来源：http://www.aibaodan.cn/163zwmaigvm.html

G. 面向对象
来源：http://www.aibaodan.cn/163qqchwptr.html

================================================================================
来源：http://www.sxryk.cn/163vjoexssh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qeylbvai.html

Py:   class User: pass
来源：http://www.xuanzx.com/163oltjpbuj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163nuuewluy.html

JS:   class User {}
来源：http://www.aibaodan.cn/163oriklodc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163tjuiyrnl.html

Java: class User {}
来源：http://www.xuanzx.com/163lxybktbe.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vsefrzop.html

Ruby: class User; end
来源：http://www.xuanzx.com/163sbnxutvl.html

C#:   class User {}
来源：http://www.xuanzx.com/163mroixeng.html

[G02] 构造函数
来源：http://www.xuanzx.com/163iocgqrux.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ttdbdaqw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zdgrhrfe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jydutydh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163adcjhxgb.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163swevklqo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163kdnhayvb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nyqvojbi.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163aylbmpyi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vwfyfduc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163geosxqua.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163dhdanfug.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163njzqnjok.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ihjxcozn.html

Java: private String name;
来源：http://www.xuanzx.com/163ohkwulmo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163cuxnrnux.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163sggdldec.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163qprscbsa.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kgopxrxt.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ohedgvtm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163myriajlu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163dzvoghzu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pfvbmyrz.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163icmlophs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jugspimy.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163krtifmpf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163abysrlcz.html

[G05] 继承
来源：http://www.sxryk.cn/163exjzjdkp.html


<!-- 参考信息 -->