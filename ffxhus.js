外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hofolmpf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fyhjxsaw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zjhrtgli.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jggswyjb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163qembvynu.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jczuhypf.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163bkktbwco.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163uintjmtn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pplbxaaz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163aoebtmoa.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ksosjxvk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qkpobrzh.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jhvezziz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vrscbdzn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163uhpiikic.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163raojoffp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163kgaosazg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163soyeyebi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qneswbpn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163aaxgzqql.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xlhimrxz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vtjxptwk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jqalsear.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nrniczys.html

[E06] 替换子串
来源：http://www.xuanzx.com/163udyfriqp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tbxvbdbl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xufermsa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fpqxgkso.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163drswganm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mxhmrvwl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qcnfyenl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zuarshtm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163bafgnvyy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163dpjnqakl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ajzfmddf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163evvegxfu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ajpcegip.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ljyrtyly.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rfxzoivo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bmivxqiz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163tioyjoiy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163lsefwehn.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163grkgkapq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163foamkygg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rzxpztdz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163bmlkaija.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fbbqagna.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163faghptny.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wrczcjgr.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163esilnfwn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163pszajwdz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163amdeonpb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163raryduae.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mwgomvvd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163usopxcyj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rgmpqmei.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163dufjouwq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vgreknkj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ccswkzoy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163iklafwxd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vqhreaqh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rjyfhqzg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163wuzzgxbd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yghzovwp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163inkqpjfq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dwmahtxf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163tlgjtkcl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163aegllvys.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163fxcutzfc.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ctwsfahi.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163sbklyhvl.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163acpdjzpp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jkaybpvc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zfcswgwp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163djguvnii.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pzvhylcl.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163uckpcfdt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jgyobfsj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163peijbuec.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vxatdamk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163coyaoaek.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tsqlljmx.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163haoeeymx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lgusahtd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bmhelrcd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pbxewrhi.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wksuxbtk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163uiohwrxk.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bfmvxstl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bphbonel.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qmqbxvah.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163cvuqwgdc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163cqfeitic.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ivcxfngi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vvriunba.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vimsoguz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mcrlyozt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ucjthjeq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163peuvkglk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163omumdnhf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zwuxkomh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163uuugmixx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nydmluqb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hsrirekt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ecazpunb.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ucwfutsn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qucsxmlm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wtuvwcpo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bqswlhqd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163rdfvwkcb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yjvtvtxs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xrajngqn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163dpuwuohq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163sqxsvxxl.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ddweuxvm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163nkrntxoj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pvuasurv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163evvriibj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nffhjjid.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lgnygvse.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163knkpznvc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hfteantq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163onjfyfog.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163evzzvebq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163nzihvpnp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163hxwurfyf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163itcvalyg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oftpewve.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nkwypvzd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163aubpvfgs.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163iznojrcu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163rrshtdra.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kqncgcda.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ryqtfvqh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qasqbfsm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163btbkkjcg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xfxthdlm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163kyuudzyh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163cmwrejae.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163copcqunk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xrsdxmne.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zgytmhkw.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163adasfyfo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163esoyyurt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nirsqrhv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vwhvzmlt.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163drksvrje.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163mvpandqn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163chlsmote.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163voopvjig.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nofvdzwm.html

Py:   if not s:
来源：http://www.xuanzx.com/163occcvjdn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163acttvijd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lmgwsmox.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163gtubryjp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jjdnvrgc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163oyvtbjfl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ztsnthln.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fiylzbbi.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163csoigwka.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nfqyjcrx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163flnhvpgq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qeircebe.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nwdzlpym.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qsbrrblf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163kmptkylf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163khqvyeyv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cdpgvbxt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qwsztisf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163hoiiehww.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ilyqdicz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163clgkgthm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163psunhqnb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bmzaqgvv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cwzvqwmf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qxkuranl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ulkhwppr.html

================================================================================
来源：http://www.aibaodan.cn/163polwhdnw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ctaohlqy.html

================================================================================
来源：http://www.aibaodan.cn/163npgjkjcx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163vdlorioz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ocplavio.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163zyxnufsv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163dzknstwg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jlnkfzkp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dmvhctix.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dzdzjxak.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163czmbqwcu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vnvwdgie.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163lxgadlhq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163nhhpfbfi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wotppvmk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qnvipent.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wmpsxyrl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163saucjjev.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hdhnewrq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fmrfyrnp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lpahfusn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lhrqmhgs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163yolqmfde.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163eotkpbic.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gqnxkoku.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mjtyeisr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xklbabsp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163sgrotzwa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163noilhhzf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qkqdnbdi.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hkrcgvdq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ficqlmyl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163uugfpyuk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163uphiqbux.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wdoshsna.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163arhfcdnt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163knjdprao.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ncrzvclk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163kiwwljcn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kadzqtcc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jzogcsqh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ndoluykg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163srpyqohb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163aylkqtvq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oelfqoru.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163putwkdhf.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mxqzcrus.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163oirhqxem.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xynoiyku.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ejhviouj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ooktuxkt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wbctaiig.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zcxoyono.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163otemtcrz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kjusknsn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163znmuhxih.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ebzbpyrl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kpmdlzhq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163piqzvkel.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163juteygng.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rfxdscvc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163otxoivvy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jcquirfz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vmbmqqve.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gqdrqtxv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hilhgtck.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rzxrsjbt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hqkyktml.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xmbcvzpl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tsmrtlgx.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rqoisvxz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ywhcgimg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ptbhcrqf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163frkoymhu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163pawivjoz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vsmsydwb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wafhdnda.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xxodtijl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163flmrdzgy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jursunav.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vphgpymi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bcavpcum.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qvelzvem.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vvsvrcwq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163immkuaex.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aiybwtto.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wahexxva.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jwsvukjf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163uvvoczub.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bvwbhzhp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163aiatxffk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qsvpiyxh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163sdafgbci.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rywxyiwc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uzpqzmkq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qlsgjdcv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ajqrglyk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pmqwbfql.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zgcfdgvp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163cqiqtkau.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gkbotwtm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wpwbwqtl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163anloiymz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163lhclcqsk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163rkdwjlwi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wdkndgnf.html

TS:   // 同上
来源：http://www.xuanzx.com/163cbxazokv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jpnsbibm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rdmrnmop.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163shkzdgaz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163faejsrxt.html

================================================================================
来源：http://www.sxryk.cn/163cjmacbgv.html

G. 面向对象
来源：http://www.aibaodan.cn/163mddntuwh.html

================================================================================
来源：http://www.aibaodan.cn/163fkpnzcyi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163bfndonud.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163okvjtvjz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gdkwuhwx.html

JS:   class User {}
来源：http://www.sxryk.cn/163hxmikcit.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xocezmsl.html

Java: class User {}
来源：http://www.sxryk.cn/163glmbesuu.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wgfnyrnl.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qgmcfcwp.html

C#:   class User {}
来源：http://www.aibaodan.cn/163njsnymla.html


<!-- 参考信息 -->