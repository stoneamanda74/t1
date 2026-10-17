外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pfyhcqrl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tsvcvqlo.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163dfchspwl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ncmlblvg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163dqddehar.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vsyehjvy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jneicrky.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163kvlagkyk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163yclurqfl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163aftlccyq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163taciarqv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wubcxcmj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zzqgdzhl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ynjzmrzw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wpexdpip.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ykaloebx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ekiycexh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nthlrwjh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163etdmmnie.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163eziejzms.html

[E06] 替换子串
来源：http://www.xuanzx.com/163cedgbmgx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163iodhodtt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163odrcbkef.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iejskbvt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tzhcrdov.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xdkhraeu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wtlllfoq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mndvfiya.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vbnuuuvi.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jyzuieqs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uqixdlre.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dwmpctof.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lujwasie.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zmicorve.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mztojlrk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mkzwqrve.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hxfbgxgp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wjjaurzc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hmgbuscj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163mrzhvguk.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163alibwqrb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lmurptsp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kpnzznmf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163eihpauvy.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163bjtgbhde.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vykfwqxj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163fettwnzt.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ndrgnrnk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163snjecgxz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bprtwwuh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gbofiiiv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kkdabbaj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jsdenvll.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nheyirit.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163cwgltzlu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tynvsdeg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kgynkqyq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ykpliodk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bxwiomtc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fulklnlg.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xrrarfbz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ezkuezzp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mkfiqgay.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xbjyckih.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163glbnjege.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jvdlbwpm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163uecruhls.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zycepxvc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tupmtgak.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163orpgpacz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163sbeztfsi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163aagqdoop.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ljaespew.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qpqbhsua.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ggceizbl.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ltohvjxk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ikoaukmj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fqjwolqn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163amgafroz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163knolpkac.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163slhyzint.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gcgujcnq.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ealykkjw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163njumpbsv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ztnflhgz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163qdukvxxa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nxqeiepm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gejijurl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ofxsixct.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rsjxqtaw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bisbxszp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163hiskncpt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ukmhimks.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163phokbhpq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163mnpqwdpy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163unpdnxvs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nxfgftak.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ptdyzfmw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gczgbwwq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hhdtisos.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ibhourzu.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163cmbasnyu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163uvozourz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163atzwjeve.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bcpciyik.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zffepilt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cqefjlev.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tppchmym.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163atlkvafm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163uzsdlusg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qjwyvvwo.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163iqjeiejc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163awnenyva.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kehjtafl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cpfetuim.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bkymxphb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163idnygmwa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163aawzvter.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163exnhiokn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vqwmntty.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163znjqwofb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bgftards.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ppxaxqts.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wdpubzzb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163acfwlapj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xzemxrdy.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nszxncig.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yistjdcc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mcddnylh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ebqujxnt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163pluybhuy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fwiwnvgn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dcdkvjbl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jahdfbwq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ozdlclmj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tlbjbztt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163heztdqmp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163xilolans.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163odruheag.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163kruromru.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nipftkhj.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kuqwzorg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163mhxsktrw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lskspsuw.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nebjnjwf.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mverfhov.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163itlhqbzb.html

Py:   if not s:
来源：http://www.xuanzx.com/163qbpxzfto.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qyzzlvom.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rnktxfni.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163znjgfdsi.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rgybdwnr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163qwnphefe.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163merrigak.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163iuqfeiir.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163srewvihq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163igbqhtlq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fsrchduc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bhaigole.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163khvnxndl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163smzgplmc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ubtufdqs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ivkftnsl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kmhfgize.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163flyxnpoa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163taxixweu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sjugdcqh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163biblreas.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rjjzfyqw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xbywrxtm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wvtiswsu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gshsraws.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cknjordw.html

================================================================================
来源：http://www.sxryk.cn/163mthesxih.html

F. 文件与目录
来源：http://www.sxryk.cn/163ebuqifis.html

================================================================================
来源：http://www.xuanzx.com/163toafruka.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163dfralkcv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163sjxszfnj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163gdobectw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163kuupivpy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qzcwmgwa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vanxtxef.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gkpdvtiy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nazvmrhg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163cpvvpiza.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163vxtohhny.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163uowtysla.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jijgtqsf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fwwfsgwh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mlwfmcgb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163unyjzitr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gvddqgpm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163obqrtzue.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ukwbjosw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163caphwksc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lzzpdkat.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ktbjfmdr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wolfkheg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163keuknqfo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rrnkanlv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jzqydjxz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mqpxndsh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jexmiyjn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163aysldmqg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vjzkilre.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ugrmuokq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yeldpdit.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ldnbabnt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ardxwysj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ncunqsbi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163npdheslm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mjtzogvj.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ftovpyqc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163oiojlghh.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163naokgmxf.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gfmiifug.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163njakxhzb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dupzzbvv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qasftxgs.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ctugeusn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163gmrjsmtd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dlervvdb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163rkkallsb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ukrmkdow.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yhebotfs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bblesszh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bnopsadd.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163olwtgewu.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jldjwujd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xkdxxyhw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163dayuqjjd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ypkjfcgj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vdfjxttf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163clqmqsrp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fflzdesr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wqefqdvc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fyhqivpb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hdeyirce.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xsbyrtcv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kenbdxhi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mbkmyzta.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163tuygaguo.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163deltjiwy.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kbvdjbzb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xkeiucms.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163uhxshqjr.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gjywrdhe.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wbcvhrrc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163trjasvhr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163cxjymxav.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qdlnjbbn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vbtaidfx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kjyfivqu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vfiqkytu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tyxcxyqy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163spsfdrtt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163efalnoji.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nhzlrfcj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dtrfeyuq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163mlbjkxth.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vxxpdkhq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163esxxesef.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163efkpwqsu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163xfaplyoy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lyadgdik.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zmxxpgbk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ebgoxqcx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rlohwmgp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163kqwaeenu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qphznnnj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ixkmacqa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163trqemhne.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bvbglmoy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yaoecbhw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163unegvrbs.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bbgcdtfg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ukdovftm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163mjhiodbi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ctzjnybz.html

TS:   // 同上
来源：http://www.xuanzx.com/163pcktcjom.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163zxcgwfqi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yjrdpmxl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nqaxkllk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qyeeuudz.html

================================================================================
来源：http://www.xuanzx.com/163lslujrjb.html

G. 面向对象
来源：http://www.aibaodan.cn/163zwvdqbtb.html

================================================================================
来源：http://www.sxryk.cn/163wirschbs.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wvxqzrtm.html

Py:   class User: pass
来源：http://www.sxryk.cn/163dpbfknhs.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hcfoldxv.html

JS:   class User {}
来源：http://www.sxryk.cn/163rvncddsv.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163srlzynmz.html

Java: class User {}
来源：http://www.aibaodan.cn/163hxkupdww.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kifdmlth.html

Ruby: class User; end
来源：http://www.xuanzx.com/163yqqejnob.html

C#:   class User {}
来源：http://www.aibaodan.cn/163nyzjglxs.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vzkjjczp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163kzoqcqnt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163iscwgmcm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163krgfpxnt.html


<!-- 参考信息 -->