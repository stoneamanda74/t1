外链999!wailian999！

[E02] 重复字符串
来源：http://www.xuanzx.com/163yxpjxhoz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163uphwwltr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zfzoqmfg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jvxcizni.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kynfzyzi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163enaxzrvf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ofooblpk.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qmmxoawp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lixscfbc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rbyaykdi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ramvpttv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163nppabqsc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hfuscqlj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ojtsbfut.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163izapvehh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mchwkoqt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xzxwgvip.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yvlhynam.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qegxhiao.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rlumzzrf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rwunwiwl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tblmacsq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163deuijymi.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163dscodvaa.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163tizewdoe.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ugyzswlq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fjxrzqbx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yxnpkosl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163cssniyut.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163olbsnayo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163birthvkp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163iwjhsewi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pscizgpx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wwutlgiz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lvtzclii.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gazaqaso.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163adfhllbw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jwxyheyi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cussqkov.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lyfkurpw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dazdxyhk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ledvguiw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163bajrlkxf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163besyqqhd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qoyvielx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wqjgiwiq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163sjkiahlm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ohbtddnb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wolvsbmr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tjanoefd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163owwstjzy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163gxkxwjdw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kljhbeqt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rrorcfpj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163zrudajvu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fbwvcjxs.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163yjkqbwyb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jsrusook.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dinypyem.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pavnhgea.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rldhogrt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ijzvxqvr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qkcryapn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qohgxqbi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tllypbwg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163pehrkxzm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ozixgwgw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163heyyyiyf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bxpdtbeg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163uyoxfjkg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vhnowgps.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163efdjwyqf.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163fnfenshp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163laikviuc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rwiadwax.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ijwhdszf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163axdaxibc.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163axdafoaf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163uxpfwuwp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rdqismkq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yktpbjht.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vnfytqmk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tmbnzigx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rjbwzkuf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bvodrfzq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wzfnlxzc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163eamzgtru.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qyotjbsr.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163eqvhmkpz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163horwxrrq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ottvkmhh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jgqvvwiy.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163fynqzleb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163liukdnpt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hkxjncqq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rtskhvbe.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vprjprka.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163luurhyns.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fhjdalpu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jwibutqa.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163mgcmjkwu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qjsckxum.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xgvxqlbu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lndqwddo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nywwxuiu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163cjjudlwb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163aouekuzh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vwdqnonb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gybqurol.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xydujbub.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xzojsebe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163yclgazdj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163khhrnsmc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qtpvmeqp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163mkqssmwt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ecgkaezh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163poyvsyrf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ebykjwvc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rzcelbdz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163nugvhjei.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163xmixolte.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mvykgytb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uazxungk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163opdmnkly.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ppizxqtx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163demnmcxu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163gnqibndj.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dasgcrwx.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163zazoyqba.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tmxpsszd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jyapulwz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ngilbdlt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163yboexiqh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ozgdbdyy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ocsvozov.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vanxwnnq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ouwtusbe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163kajyczxp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nfxeufvw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163byldocct.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163penigjtn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zzueawth.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rhgwthpf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wudrvtnx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pkipuaqp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163irclkvbm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163abkmpdbg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lhdjchci.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pfpnfaya.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xvioeukj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jqraihzk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nlhqwowm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163yifpjeki.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163hlfdwzmq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wnphzbjd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163syvevwyl.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lmktjkus.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ghuwosnq.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gvxiifag.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lwmkgphh.html

Ruby: s.lines
来源：http://www.sxryk.cn/163sfmwkcmw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tazbdnzg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pidviurp.html

Py:   if not s:
来源：http://www.xuanzx.com/163anmsgyfn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ckcctmew.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gwjomhng.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ymprefdj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mmaswgnw.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xsqqpdqe.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qpdqkpgw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mkprpcbq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qybxrhig.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kbhdfpxc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163drwammqn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163okjsjmtr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qzyzjmrr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bfsftjeq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163yymnhfhf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163taojhhxw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163aoizdnjh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163myjvuutj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ewzqfbqc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vlnhzinj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xyvwdtda.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dojuasvc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163pavhsoov.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163dbzqjwyy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163glhnvwib.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hgrwfowv.html

================================================================================
来源：http://www.xuanzx.com/163zibjymzg.html

F. 文件与目录
来源：http://www.sxryk.cn/163cxwrunph.html

================================================================================
来源：http://www.sxryk.cn/163bjgdfrbk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pdhlkpgl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ojcrkjge.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163slsiglaj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163vlleagcj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ywvrpuwb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rxwgmrsw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163cnrfjyad.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163opdvsclm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jilwjsxa.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fnvkyhgk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tkjcdweu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163panzzbma.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vugzubbb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fnwgxwca.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rjeudgjl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ungdcjxl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ynfgnnum.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rtgusdhz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wuiwmozy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163aldxynkk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163dgdbfhcz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dhbmthpu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163srbctucf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bkoaaplz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163nmuqdurh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163qzkhlnut.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rpdtdelb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ejxtrigk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163fyefdixu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163celmerqy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ropzxwza.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163asgyxtre.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sferilhr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163nexxdeix.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163puabewvs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lvcqxplp.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163iidbymci.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163addimsoy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mtvhynqo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nnnytnks.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ldgvpgaq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dsmjoxiv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ddavkotz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163phtitrvk.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kvlgyahg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163yjnzhnoi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nrnxppjd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rgcmmxor.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ittnpwhz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163uwdxgvbl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rpenowun.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163olpvhukv.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ezbhsupf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163onerkfkt.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jdqopqop.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dxmaihmg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dqtkktuy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ptqhgywj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163arailnwi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163dgpyinse.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gvzoqfaw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ecbzxgyu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163mkwjhszi.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163nyagzdqq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163tyczyzzc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ehexmrri.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uvfiirqp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nlwcsuhg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bvdepywt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zpgpkckg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pbuxmvni.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nsqkgglg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kgtgxisq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163gyukueli.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dvnugmwp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zkobjgam.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nhgpprng.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kzatutak.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qensuhyv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wajleroj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zslitcpp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163scfceykq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163neykonjh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qurkoyin.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qiarfjvc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163sllenqir.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uxmjiyhf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fakwpvrp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bkdtvcmi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163iiupqtlc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pfcynxcw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vgazicow.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fdavirfa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zfsjznaf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aqyitjls.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163feygttpu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163uxemwxzh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ddexvlwz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hsrpbjbk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163oddptbio.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163efplzjwd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163duhdvhgo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163medbfujk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163yfeguhaj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163bpeysbtg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ueibkajo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163beakulut.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163zrubtytf.html


<!-- 参考信息 -->