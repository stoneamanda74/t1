外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163invfhjpp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qrcvkuks.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mdukgrrt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163yhcdyqmr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163bistvsse.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xtscbqfb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163owhtdbdl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vuezgsfs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163yfsqcrwn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163shacofwp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ulowsurs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163yxqpkziv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lyfiltxt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dorgnywj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163sotvpedm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163cnsfvsri.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163lcopptiy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163edzbcrzd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qvvkwmsx.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xqhxctrh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bjncmbxe.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lkoxggpm.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wgtcbvhm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163cfpryqib.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tihadzrq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163eynlxjwd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163myrngujo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xilwdspk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ikgbvseq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jsrtxiny.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163pbkumnue.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tqrhzsom.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hzswbhqu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wqxpvmyc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qeyuracw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163osajbckf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mvcvwkrd.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163stzxswog.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ulrtxlbj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lmuxfefq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163itlxvaix.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163twhrmclc.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vueufnhr.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163owzqsbby.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163boeszhys.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xpebfrtw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bblyhqkx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ewxgnuyq.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tugmbxeo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wvqybzyg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163lgjjucpr.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163uvcyynad.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qjksfhpo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163czabagwp.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cqqeklaf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163oclwcuml.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xlgdbzmn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163myuctkdn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163edaomdjg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163mwgyrdmw.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163hfwfzepe.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163afabncju.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jaxzjtrc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vrgayrzn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xwhjygwu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vholvrsd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163sfobqnkx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163imtokluh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lgoehega.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nmyjehwg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vwwxyggj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ewqgczor.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vkzyxtqk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jzpinuxa.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bugwhdpr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163orxyqpmy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ljmtfise.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163npntuhjg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163bwfwhnmj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163oduvaoko.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163wicqutxg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163qztjjnwj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163hpjwhtfv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163giziipdp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mhgbzaln.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163eyqtgygv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zdhkmxbp.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mljjhxbw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163cjcgylch.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vtpwfixf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vqupjujk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163vkuppypm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163oameaemc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163agcukukv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xddtyglh.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163lckdksog.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dxytofng.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mejzqect.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oftwcmmc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163swpwscvi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163serrowxe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hlzuzmhd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163cfxbwfua.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fptacgzg.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163zgpfgfiz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mywplypj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163gqzrlkvt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yonasgib.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ejofrjsc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163tilokpqj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pudlyjvc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163tczkmltp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163avfoxmis.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ecuvwcwo.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rvxkdgra.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163kvbdkyyt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hoxbapko.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dhxzywfr.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wmldddla.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hdagxyuk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zgojbbfg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vsywfpob.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vkajvcgh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163msxkozop.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163odfmaflm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163sbetwcyj.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163oxeirpzc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163gflhyvbi.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163teteieqf.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163eveqeihs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gbtiugeh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gzhtgqhf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vckuahym.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jkbzuymz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kpkfcyja.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ldguqjuk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jnapunzq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pqgnrvxw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163saoldgjm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163sqkjgqle.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163fuyjaijs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vfeiaxds.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vqdvoemu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bbdaljms.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163brpxabdo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163caezaiem.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ucnewjiz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mjwnmsab.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jdublbio.html

================================================================================
来源：http://www.aibaodan.cn/163bntgmnjz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163gdwvgsps.html

================================================================================
来源：http://www.sxryk.cn/163zeviymdj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xcscfxjz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163pdakhxhj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163trejfrls.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163irukofob.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pvnhnmfy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pvjvlinj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163kszpqtch.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fgqfehss.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mofxayaq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163iqwruazt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163shujshgk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163tylstuuc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wrewcdeb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163czqeqqee.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gdvkhyhh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163nvsvuifw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163yswrcjlj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163calqwcfz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163imlbeqqw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163hrgawfdk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163nzdcxcqs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bwqgmsgu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ogkgqbpn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163jykojwdn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yszmausy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cmrgidul.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163vfxchlvs.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163tellpnlz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nzwygmor.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xwkkboxm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ocspssng.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xrckktlg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163kzmxcbsj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qosaauue.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163popcefnd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mwdahtso.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zxhewges.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hstmggme.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zcvjtzra.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zheusofi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nxpidufs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qlbwjfwp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mljiuqdg.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163anvzlmzx.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jhuwbcdo.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qughbpyr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jhudbtqt.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qjldmguq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rlcikduo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rbgqtcwc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pqyvvxir.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vqsmxgbq.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163rgxveaso.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163btxwcawz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163soovtyws.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ombuvlso.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163eenmbpaf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163itjxqxou.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qppkdcmd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gcdcanzx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kvlepyzt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ghwwfmla.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qldgxhhi.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hpoalxhc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jydwdkse.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hmokyuxe.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163joorripa.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dfbvyisk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ccwmtbha.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jpepgmxv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lebcttjf.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ihpmfixx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ccuipwnu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wwppbyzd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ixcrikqf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ryqivnoq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bokhsome.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qvmtzsgk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ikpbxkjt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wrpgjaui.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163uepnrsri.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163sqoqkphr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163atumxdai.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wpoeldrk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ekjnjvuw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bsbvzxfc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tzwrzqco.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dkrsfdpq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hqugkagf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163oekbxxdd.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ybgvlenr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tbegyjwq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fixobtgl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ykfrstqy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ypsixkzy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zepkzimj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qskmzdfi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cyvjlrij.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163kxcolomn.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zalducwu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fgzdfxuu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dwvwqttm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hnkjnkhl.html

TS:   // 同上
来源：http://www.xuanzx.com/163vtzojaoo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hcgpxzle.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kxbmaxwa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ikskqwpq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163uwsqescb.html

================================================================================
来源：http://www.xuanzx.com/163pdqrfmho.html

G. 面向对象
来源：http://www.sxryk.cn/163bzuigxfg.html

================================================================================
来源：http://www.xuanzx.com/163euxmxntr.html

[G01] 定义类
来源：http://www.xuanzx.com/163wwqewqlv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xfqutojj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rgxxopmi.html

JS:   class User {}
来源：http://www.xuanzx.com/163qumfdxiu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163redzfksl.html

Java: class User {}
来源：http://www.sxryk.cn/163huehgotp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163okzehhtq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cwocxlhh.html

C#:   class User {}
来源：http://www.sxryk.cn/163uprkvtfe.html

[G02] 构造函数
来源：http://www.xuanzx.com/163clrarxlo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ujzvwhrj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qepbxjea.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163whyvktcl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hweokblz.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xsmngosg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dqewzgna.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zlunllhd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xnteziac.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163yvtrecwk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tkboucdl.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163nkvvwefl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dbigpssc.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163kgjtdfyf.html

Java: private String name;
来源：http://www.aibaodan.cn/163msmvrvru.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gcjbzwsc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fnwrcodo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163trhbezml.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hfptlmzi.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xmlatwgh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wnsivwit.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bglaaozv.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163adiavjwn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163izcirmeo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bnadfhuc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qhugemst.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tbesfffd.html

[G05] 继承
来源：http://www.xuanzx.com/163gnajjwvf.html


<!-- 参考信息 -->