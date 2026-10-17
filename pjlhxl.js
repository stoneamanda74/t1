外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jrxdznft.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dkahdhjs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163yrohudwc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dqjpqydc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163cmqgfdko.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zajprqak.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163mdupuvrk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163yrvsdzya.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163byucjzhu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163skyazupg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163vykhjxxx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163yphrolaz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fcqetayb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163eespmadx.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163pdfrhypa.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163nguyivee.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163bbkkwxms.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163svhtjdpd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ydaagkyl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163iigesvvi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163zcvhiwmq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rfpbsisf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163xuwshvio.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163itwormnw.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vkxxlkbx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wrltncju.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ywmuycqj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rcpydmej.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ngpkavcb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jbikliyl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zrqbpwvx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rjiiqpxj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bnuwnnca.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jihuqxgp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wfgrvldn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zdcdezwm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ovvbembn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zbiwifav.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wbjscjmu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163iyzpgvqc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zuwzbpfm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dyqadziw.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vvytlxqt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163niusqvch.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163sondhwqy.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nxobcekn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wbaedfiy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qfxujsmq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163dhlujlpl.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xytbkfpz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pxyvmabv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163dgbhbcel.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163clhpqvcy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163dvnogxmt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kwhxvasz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uhywmpsb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hjwijqni.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163inykhufd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163awjapxas.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xyacjapq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163awmngbhp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163orwcmpzq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163xjcjjqox.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zhapwjjq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ihmkpxaf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kfzummnd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ilnimkne.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163rozhscfv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163yykflhtx.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pydpvcme.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nxfqrldv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163asogptoz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163eopeogbd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lbwtkdww.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hmpjjxcf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163smyvbqch.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yqzdprrb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jxdpryrx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zbplnqsp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163hylwdgwx.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zzmwzysz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163lgycobkk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dbkigyot.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163xefifmrp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163mmjidhav.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vokrgtdo.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163nfwwwdht.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zoscspsx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163npdyurov.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mjxdejts.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163akbnrwkg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ctwuaruk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mlqwwfqt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163oecgsdks.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lailhjgr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hdplnjls.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163dcxajhwm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163zvbxycec.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jvahcgxa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pwcwrpbt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ijkvauar.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pneiinlg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163iiwutded.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163mbkubcpg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163phxazdyr.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163nphesjsm.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163yvuodlej.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163djykfszc.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dymiaaoo.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163sypuudlt.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163cegbmzqt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cdcxmksu.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163keweonyh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163eulneiwg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hkopinqk.html

Py:   if not s:
来源：http://www.xuanzx.com/163oknthuiv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163kybiewzl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163huxpppnz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163abxkhgas.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mwguloqa.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nbhbavqz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bexfqugv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rvhxdbee.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163memixwvs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ccgjuhje.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vbhvwjtp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ckdhpvvz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nbwaskay.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bzoetbbc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kzbgfdzw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wglxtrzy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163sbndqyyd.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163aoufridi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163siaqwugk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163klbiyczx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dxzqasyw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wjfzwyjd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hxgvbnhz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xmssuznb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mjadjkct.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ezgdgkks.html

================================================================================
来源：http://www.aibaodan.cn/163xegsmrxu.html

F. 文件与目录
来源：http://www.xuanzx.com/163iqjknozz.html

================================================================================
来源：http://www.xuanzx.com/163qygjkctx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xhrqzzeh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163iwjfcrjw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163enhzbdkq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fllmuqbz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tajlofej.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mldmassv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163yhcynyrl.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jrsvdvlf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lrbaryxa.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yulljoaz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ydhumuey.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163aynccvgt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qjvcnqcr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163obohfsza.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zhiqiojd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uwmeupnp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163gonaydwn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kyolxldm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163qvhvubxy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163fsukqxnf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163khlipisl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xuoufzhn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163heecbdbo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kldzdxfm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163gauwbzgs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163uiztlqxw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hoakhtan.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dxkupcta.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xxwtcjuv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163icdoyioa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ifdjunzt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163agvupsvc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pordaddy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qwxcyssi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163kngdbfbk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163pqcgjavv.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163djgemxas.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163lgrfimgt.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wyluhupc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lywrrnac.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163umhdqdns.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163luxvcegz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yyzdmeti.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163oumcwkpt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163urrfkxem.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ygwpklgs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gxohmcir.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163irpnzvkt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dexzllrc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bvvzmyhs.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163efvsvixl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163utxopvuw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fvckivas.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jyckoatw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163rlnhicif.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wkrxopjy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nsooadmu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ksfhfzdl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zrkouyyx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xgkuzwmo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ieljicfe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wovnprfo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163uotnpnvo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163okxqjchj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163txwsmoiw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pgczstae.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163afyujicz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fglbkneh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qqpblxoc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163lpnczded.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wyowceut.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yeelmhcw.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163nvpcvjgq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163skyphkgi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vqdozrrr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lizhcyky.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163inlqkizr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tokmbvrl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wkmgelje.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163dmmsgkea.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vedlsavb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163flcdrkwn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bmhfsfsa.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yigeptom.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163brgrdlrp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pnchocbk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tlwsrfbk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sygujetw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lwoovwss.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163cfgqyojk.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163smxdbfdz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fqmhhsxz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wbfhsobg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163weyebnhx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163escstdxw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zabrampr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163tzvivush.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mwwhorhi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mgmuqjsr.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lkvcafmc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ruxjhmkz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163olcbvvai.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mpcqjrbg.html

TS:   // 同上
来源：http://www.xuanzx.com/163ttrfjiuo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tjngqbuw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163nkyejyav.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163cmtykcfa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gvuzpyak.html

================================================================================
来源：http://www.aibaodan.cn/163dohwlghe.html

G. 面向对象
来源：http://www.sxryk.cn/163qxtlznsh.html

================================================================================
来源：http://www.xuanzx.com/163xbjeruvj.html

[G01] 定义类
来源：http://www.aibaodan.cn/163slfqtcin.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zjirdohf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zochlomi.html

JS:   class User {}
来源：http://www.sxryk.cn/163ymxguily.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qvtrnoiz.html

Java: class User {}
来源：http://www.sxryk.cn/163mucybshp.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163bqaxtqcy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kpantlkw.html

C#:   class User {}
来源：http://www.xuanzx.com/163kworzzcm.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kfplerts.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163iahxuwej.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163aplbioda.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gutwsdca.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gmkusyns.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zcxnezno.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qfyqgmbz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163uysaqezh.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163spnhlbqq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uriiyaya.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163qwzegjyz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163feqkgwsw.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xxgyrobk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lthjxdsr.html

Java: private String name;
来源：http://www.sxryk.cn/163jcdbnrsd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ymuepimh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163mbjkoauz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lsdhkhjd.html

[G04] 定义方法
来源：http://www.sxryk.cn/163eysprjnr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ujhtjmin.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163iaagbqkf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mnsvociz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gbulfjcw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ftiavoam.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tftajrol.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gyrrelak.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163plddiksm.html

[G05] 继承
来源：http://www.xuanzx.com/163dfrsplwp.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163swvbzuvk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163nyosyegk.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lolwrkgb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163whomqvrv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163essxvbkv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ftwaxsdh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yiovxzgr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ejhbfpqq.html


<!-- 参考信息 -->