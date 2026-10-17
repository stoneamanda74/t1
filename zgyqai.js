外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163iigvfymf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163lipzwawt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ooblhkuz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cbrwvjzl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163thsgfoiq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qrlxcqyy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jiwxhqnx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rgtkfcwl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kmbadqim.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163htduabxq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xeboirqn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163olmzrxmq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163civlinvy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jimdhzpd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ajtdwpot.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163trqthahh.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jpjwssom.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163kxkxaakc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hrdttvic.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163eiomvlxy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163uqlbdhio.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zdjqmwyo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163wfvcwnzc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vroqgmhb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163oztbpbnr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pekovamg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ahojohdz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163skabfgbx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163yyqsjdrk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163itsbqqai.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163mmkqwbtj.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pjytueun.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wmenrwdy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ffnybnlx.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163gnpfuqbe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zqywfiwc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163aqwgqhcx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163oxbzalhm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mhvzrkja.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163eisfeefc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163oeqodavx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163suuzraeq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hiquegfg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163msbsdgbl.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163axzjhlgl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wbukduad.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hcqvqytk.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163acqsjlar.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hukjxdkj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ccwwzgai.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wjuwkjnm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163cxjjsbai.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163eojmecjl.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yjqitimk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ugjmxogq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rlsdtyka.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nohaojrm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fqbrptam.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bblvnphm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bvykjyaz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ymagyecy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ooeyykop.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dewxzkmf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163obhaoidz.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163eshqxpju.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qknnsdci.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jzyopgmz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163xedfpqep.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gkwfvhpm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cdrztcem.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wijkadit.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bbbbsbwn.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nhsvebph.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163nixcwipa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ibmxtufx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pcaiawqx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wptkacjz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pygeeywh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ngpsxgco.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163tqxurske.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ygqvorhs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163quvtfmxs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ukfwigzy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ujedfxpa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163hgwgaeyd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bpdkzaop.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wrljgtap.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163lfefkkrt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mgclswcp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zwgzhjjt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163yywqwhsa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163qqdxijld.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163uhpxiriy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vezvhokk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vpdhwlfb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xzivwzxn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163amhumsgb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163inzdweoc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ecfzvssq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qlqfjmjc.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dhajfrhw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hdvziixj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qdviusnv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bicdsoon.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cyzycgmd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rrhvohlt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163oehupvdu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ktvuaxpe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rhbnaznr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bpqpierx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lkhvrprv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xvkrpvne.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vztuyhvv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163njkukikc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163knszkyzd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cvnsbbey.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fsakvpkm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ijxtjxer.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163usaxjrwa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163acbiypwl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163okmudlhk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163huweluuq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163srfgzgqs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163dqjtdsfg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163kyrldbsf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163pzphzkuc.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lcppyqjb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ozgtqddh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vxqvnlnm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zrkvilbf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gsdkgwcc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jmunudst.html

Ruby: s.lines
来源：http://www.xuanzx.com/163qpumuron.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fhtdiocl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163dbizowro.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lpvtgbex.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kcypkqsn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hbarlbjm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163asdyhlqg.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lwzlurju.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zregpcps.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ithpcwhb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163joezozpy.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ughoprjf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163mdquuutz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bakjrukl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kfzrphzk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ucioldxg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ueymxstf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bcjfljnd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vfipxshp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lbikekhl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rplvykkc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zgvxcvfa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vusthjgm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hyydqeyf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fvakdxdh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163vxzihhpr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hdmptdos.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163uyknxgrq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163geugatzy.html

================================================================================
来源：http://www.xuanzx.com/163esigzvcq.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lgcfbigb.html

================================================================================
来源：http://www.aibaodan.cn/163rmcifbjp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163cjldvhwj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hbugnosx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bhygpiyk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ppfcqsoq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163nlqaanok.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tbucnsyn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163yjnllngr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qvdpokpi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gbdljnma.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ktdanhdj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rjvozhsk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fflxhvdg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163psskbzki.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163muuroioo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vlepnhex.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163emioittr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hnhowhmy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dwgorelh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hwbamvxv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163lgjpxzuq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163alcrymht.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163seokfyfr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ndngtxdn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lyoebrof.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163avheesez.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163iperijth.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kgzedbej.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163bjngybzx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ddljfzma.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ysfdgwgh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mmlfhiqk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hdlseuvo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ffmoxuws.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fettmxjj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rrvojqao.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163shlaldtl.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wqcqktqk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ideagdpe.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sqybmkwx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nvmwijlb.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163muaeheih.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bezzbxmj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163svrvrjuk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cmdewipf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163bnknskde.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ssqsafwi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163opszonzf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sabcxlbc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cfsbmtms.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eoljqkef.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fwiiqkpi.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163suawxzro.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qnikellq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xvgqhsnx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ylblfgqc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mosdbtwv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xmpmrynx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kphdsizd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cvjawaec.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bknaxlhd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163efkchpao.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163vgmfviqx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163uhqiyker.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163uhezuihh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163myznxnnv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163axkesbyp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163enibajzo.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qqnzdocz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ccnquodk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qtijfbsb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qafzllfv.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163leewgwvj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163koftxuvw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qbtghzdc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163offukdyx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ldjcvlnj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rbcytgrl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zmvtylvl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163kgdolfwt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uhgwbyvt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163iemukfws.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163zlhfmhkm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163epccydpp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163boxdktyf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fzvzwuje.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tlxicqny.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163nxqhmywm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bexuniku.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dtiadjdv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163givsmceo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163othlehul.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sweuansr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163yqwiftvu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xbszgymq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kuzqowif.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kfvzkgpl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163biprrjee.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mhzhpddx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163eummvhqr.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xehgyiog.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nabubxfk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xmfnjksl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rnojvbju.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ejiwecmt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fesvcikx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gvdmrkkx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ezqtmmvc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ubqructh.html

================================================================================
来源：http://www.aibaodan.cn/163eqzvzxaw.html

G. 面向对象
来源：http://www.aibaodan.cn/163imwuzhaj.html

================================================================================
来源：http://www.aibaodan.cn/163zxpmcyuw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vgmxhbta.html

Py:   class User: pass
来源：http://www.xuanzx.com/163sohftstr.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yvqsjxlz.html

JS:   class User {}
来源：http://www.sxryk.cn/163alorskox.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nareaycb.html

Java: class User {}
来源：http://www.sxryk.cn/163lkukcwiz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ewhslhrs.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ernnsjqa.html

C#:   class User {}
来源：http://www.aibaodan.cn/163wisxngrg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163buzdurkh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163cqtzyunb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163topdywrn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163palbfgqh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lkhberdq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163isgtjyfv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qdfktvnw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tbtfyrtd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163iaxfxoik.html

[G03] 实例属性
来源：http://www.sxryk.cn/163qtotcuwu.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ffnrvutm.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dtywrzvv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163htzloyns.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163odvdeufo.html

Java: private String name;
来源：http://www.aibaodan.cn/163gmqrvtyg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ivewytof.html


<!-- 参考信息 -->