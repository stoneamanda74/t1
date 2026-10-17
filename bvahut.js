外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ioouqztd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oevrquzj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163siuysdzq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wjmghmop.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cjdqhakm.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163natfhjut.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kijhwouj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tbiwcvhz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163abawhmiw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jbpqtjat.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163sdlfloju.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jdrucuap.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hxoggtrh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163aahfghzw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163exvbbebx.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163nyyeqryy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163eewyqidm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163medcqemn.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163gvrlcjny.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vwwajvej.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163iueuttie.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163oagqdmmc.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163eajtmoqr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kfbiwcez.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163npthhrfb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163yzwzmwin.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163epapgxbu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hwlpgpwr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163tggfqvbd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163evlavyil.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163cixfmbak.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lptatutv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ezqrxxen.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bkxrtqiu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163madewqsr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bdxyoaqm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rvsasuiq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xbgukgji.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163znnnicdj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163knqnlurr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ebkihdig.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163dqiemkge.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rvayzqjf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jogfqhkr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163eampytdb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dniuaqlx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163tnipdqmk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163rhhpifmd.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163nyvoecad.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tsenyafr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cnqnlazi.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ehgueroa.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163aagwtvuc.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oorobjll.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zcacninf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rbydsate.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kfpxenst.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xjwykovk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kokdzmku.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163zbswmagj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163lyjboxub.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qsqtskdf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ubpdbmts.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uhaeqsrh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163dmpsnulc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163lvuyxhiv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163mhgblhvq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163uofjhzis.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ztiurxmr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163powiixla.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163etseirpg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hcrdohsh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163myvpexdi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ehzfzgcd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tdqvpgmw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tktibypw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mkiydheb.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wbjxcgky.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163aofbnabb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163pbntexal.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163cmzgylme.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lixbswoo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163bgxfurfq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bfbalnib.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ofwbjcrs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jzcothyu.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163cvlfuuml.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ghlmqikg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vaiephef.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ynivfcwq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cqjafyxu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fonskshw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ytpfemfj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cukwxhtz.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hyeundrs.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rdgpfdot.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163igyvhean.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163pmacnzsj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ztccmkxw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163drjgavpr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kfnnxckn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163pgxjsxwd.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xeccpgov.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163paisrncx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dnzngfon.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uicqdhrn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163lwtmcphg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mcnkhpxv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nnlgdrfs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163thdenxxv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163fcwpvhsa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163etdhlajc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163amhrkbgx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dhlskjax.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fxeryjol.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163atfnzcqp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163djexhxte.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pbxnxxom.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lzfsegih.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zugpolnf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ekzjhzzm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ukyedepl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zdxzgzuq.html

Py:   if not s:
来源：http://www.xuanzx.com/163tjbseikq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hlzhrfgt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fozxcsdr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163dmutgvsn.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163gnpeaika.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163uozbicpu.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hwylonjb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jvepbmcu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pbkwyomo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163geajybdh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163yhnihvog.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xcrcnuxo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uutolqqr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kcjsetie.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qajxnmok.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fkbfhavf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xravbdax.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pbbeqwnf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163rrdkfmlg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cxpzmexm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dozhaiiq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kobudyjz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ywqepyqj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ublxlosn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rqkutmfm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163mexqglvh.html

================================================================================
来源：http://www.sxryk.cn/163cxuviehr.html

F. 文件与目录
来源：http://www.sxryk.cn/163iygdsgjn.html

================================================================================
来源：http://www.aibaodan.cn/163lyjyiudw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dsmxgddt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163iupyffeb.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zmioskac.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163luaywzjq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tfoqvopa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yukgfyfh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ciggirke.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163euixktbo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163idvhrkvy.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163beuzulve.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tochqfvr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vnhrqykh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rjfsftqg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hubewpoe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ewvbutqa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163owpwswwr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ouobknvj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wkoqwuau.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qulecfkh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wyypxgez.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163msabgdbc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bhwgngvd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fskppnvt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cpugjgam.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qcepgqeq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163qpfozlqy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qskhbwkn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qbngqptv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163raxechih.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163eugvhyex.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qyxhjytr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163loxzxjos.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163fnrjosii.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zwskpnrd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lnbtnofx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rucqwwwe.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163prclfesd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zbcpazxt.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pyqirfxk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163piumhfgy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lajpncln.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163urweszex.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vceixkqr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163bxiwghrf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kbehzeeb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163diutnvtk.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ldqozvlv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163reitsnir.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bovhjiiv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163biutuvwo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mtohagqn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163uqazazct.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rsbtkgcz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163adspnhkp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tqgeecpd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ulobpqzg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163evxvqhve.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pjoyhcar.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eqaplyme.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163dqrbdkvd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163eqlqslbm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mpsldwht.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163sfojfxem.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wqdezrdv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dtcwfstq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163owqdjfvo.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qbnyrhal.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163buxorela.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lhigvxlf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pnwudgmv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jyjseleb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163tfruckcb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mrgnljap.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pthsxwux.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lxwtsgck.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qcmotetw.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jsgrhrgd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kkhlmgvt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tdskvvoi.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163eqwccrbo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163waefvuyg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xgxzzzyb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jpfmcwnk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163obcdhxxu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aejnxxhf.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163blyjhyua.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163nztysltz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163fmonzcvj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yxaksvgm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qpvbjadt.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vqibgcpg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qlfsaozc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163giwdpifm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163krbfsaam.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qvabogna.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jweekjoz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vcrpzzwa.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xzlqmpek.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163nxzyeyht.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ptbykqyw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ksuhmyae.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ltnyabqb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163sbyqeuno.html

TS:   // 同上
来源：http://www.xuanzx.com/163aktjmvzs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163oteomsbd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zvhyugdl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fdbpqvdx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wlicffcc.html

================================================================================
来源：http://www.aibaodan.cn/163yynlxnzj.html

G. 面向对象
来源：http://www.xuanzx.com/163kleudwzt.html

================================================================================
来源：http://www.sxryk.cn/163mpspeinf.html

[G01] 定义类
来源：http://www.xuanzx.com/163dakgrnmo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163yobkfzfx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163wouovktp.html

JS:   class User {}
来源：http://www.xuanzx.com/163gplnuguh.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qttdvitq.html

Java: class User {}
来源：http://www.aibaodan.cn/163qyxxkwgo.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zkyagniv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163jjqpimkl.html

C#:   class User {}
来源：http://www.aibaodan.cn/163lwxbipyi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163icjyagdv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ogrdlzid.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yvjcccqd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163evkjijmr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163cbmkwzdg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wjyheywt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tbhtznci.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pivqlzos.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163anwkrfbl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jnsxjcmt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qqapfooh.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163gvknlryj.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163oqlydzpq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ivqjwhyf.html

Java: private String name;
来源：http://www.sxryk.cn/163frknwhxq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pbtxvegb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163emufqywb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xbvskyor.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mmhislbh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ygbblber.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163avfkzeqm.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163dlyakrjn.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xhososxi.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zbvbbpsc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zeiudyfv.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ccpfaeyl.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pzuwmusb.html

[G05] 继承
来源：http://www.xuanzx.com/163pwcurbiu.html


<!-- 参考信息 -->