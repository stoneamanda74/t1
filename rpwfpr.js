外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163kjexlfai.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mifdjpdq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163niheolzb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163fgpllark.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163curpfona.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lhldsrnp.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163cavjexek.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dqgrztfv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163kpzwxvnb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zixwwkvp.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163jquivyvs.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jaurxjsg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163wpaopahd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mnxxpabq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rychkgfo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rmkptnnf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163usgbsgjs.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ivsfcogd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vsamuciv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163mpohgqhk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163yusfhmhw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163vchbuypk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bxedvqxp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mnkqeksz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163eohzdvah.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163hgbfuoys.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jhryftgd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ukpyntkf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wznmhcgg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hksiifgr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bxapbgsb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sryqmfev.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sjqyswow.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qzbzdcqn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qxqmdbym.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rprgmljd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gjjlagxw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163hghbgbig.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163amyreemc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dqborifc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ojzghtnl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ckrahjzd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163wljabrjf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163cwxgstok.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163dzbjoyau.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cppxmign.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163nlkqclbr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jznfjeeo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163yvatjduy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163adwszzup.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163swebftki.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ipfobekk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fjoeswtu.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bmyvnyti.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ldhhxesl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163hdwfnead.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163phpzrzgg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163evpqdhsw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ajygailb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vzwvaihc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qhwczbwu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tgyrowdo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163movugjpf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163yjezgtub.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163wvipwxbg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tzzkwqix.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mssvotwv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mxznukpy.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nqohsvin.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gbcuhecs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163mryxyxjn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163zjzoiaqo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163zlcxspys.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163twndvojk.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ycrxouwm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gfscojpk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163asfistbq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ffqhacnq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163tainacpi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163yxxpkoox.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wjtaprwq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qavindwi.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tzwewpmo.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163egjdtizq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tmnvxpdc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fwtcmshl.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cyjtmnqr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fcxdrngo.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ghubzrgm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163higyyzvr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fiinocgm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163qsqtmfdq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kujubakf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163nmnomgna.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dieugqmy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kagujban.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163rpihqzhm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163kkdmqtln.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xwwjuitu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vkeqnmzo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163przmugyf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qzovzpiw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hvdzsuiy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gjzwcjhk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163xpfrfdgb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fnojffdi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wcjjutpc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pcjcvxdx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hmbnkqmt.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163zvnwyftv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bpualefq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pdqhnwfr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163aubeoygf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163wrvcdbti.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163pcrxcymt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qmpyortp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fkerzviw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163yyagrvtz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163lvxevwmf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ytkncpdy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163prhlbjqd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163skmnpumh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vzsmhkmt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163bxpxagkp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163sxgnyhbo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jvufhuxj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hkpnmkno.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163xlxqiezy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163dgqymfze.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xxqiqccq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163duhyygvz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kpargupo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163aythxslh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nurzpxpa.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163cgeqwhdh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163yzatwygc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mucypbfa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jwuykviy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163zdydqxkh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hgjmpmsj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hasnxgvs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zfsqlrzv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163yjnyucsa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163uzzkgpwk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jdffugjm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tiyliadk.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dzakrqjm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163fwerzkzf.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zsnqntug.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hlbfelll.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lsqobicy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gicsbmom.html

Ruby: s.lines
来源：http://www.sxryk.cn/163iflghscr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qvqixgdy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163gpqibrus.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ktnyrweh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vzslqacl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163skskedzh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163nobqnzgd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163nxjkcqwe.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fkqbyptm.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163suytmpsn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lfigqpmt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163luaskrqu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163casglmnw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pcvwttlq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jyqwqwhb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pydflskq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163foqwcfen.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ljnrbcqt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xttbexsm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163suwtoicg.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163oalqwbim.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tezrjubv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jtvzqzzr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cjzljcwi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dylfibmt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jbuzufsu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ghdnqagy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wzxctqeg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163kvldffko.html

================================================================================
来源：http://www.xuanzx.com/163ohlglajd.html

F. 文件与目录
来源：http://www.aibaodan.cn/163pgiekmta.html

================================================================================
来源：http://www.aibaodan.cn/163srbmaatt.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163qpwuneon.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163psxxhpiu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ffxhuhvz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ysyhwwtg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163piqvwzri.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163scmapfha.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163kzzeervc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163iupkcwgq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bwokzsqf.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kpkxququ.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wzvxwiuy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gzmsebud.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rziaarzq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gkbsdjfr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cjileziq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163aclgyike.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163erioedvh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163roajjhsk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mkffbsxy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xhykgaqz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163yrrzwdfp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zgqnviel.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zxswslou.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jaiqqrez.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hddvlzff.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163smfouygn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bplporcp.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wvrvphsc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163gozwezdk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uiqljjnf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pozzdjpc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pnzntmxl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xedtuudv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163gtupbywd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xmcgjsfi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fscifhgk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163jituloav.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163pmkmkqaj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hqwrwlfp.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zwqsefmr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qoxkiqnk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vwzrzkza.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hxrueqdi.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163bvqmtdhl.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wsscesuw.html

[F06] 删除文件
来源：http://www.sxryk.cn/163onykqhxk.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qjbrmkvl.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ctjwmxtp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ofbkbhtw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yreipttj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zubqrtbn.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163evzchqzn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163xtawubzv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ganfmctc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163vqwmnfds.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vspqspmf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dmcsxcvd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163spykielz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ppujtrni.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hgoswnpk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163slkmjesx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yrvdbaim.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ymkavmco.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ohtonmbb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gkkrlsot.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lkzuqbkj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fqzeiguu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bsrhyglv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ebtcoqwk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qvnxdmpl.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163cclgrqmo.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qjtrkmvi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163raizeqqh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163howxwuvi.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163fwmsipoj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ztofnyab.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163azswdkux.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xkzxddyo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pabfzrym.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163nuxwjqvw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jnwygfjy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uvoulamh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eidafgdl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163kesbbpwy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wdeptozp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wpxpufhe.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163amzkrert.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163znkyibvu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hjkjoknr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hkjmabwa.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lcfskkrl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xwnypbnd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163sktevrpp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iarthnoc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163atbqxkfv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ksfxrhgx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163btmbzzbk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163emesecgo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163yvpjjqnb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qjibnukg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fxjvcmte.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vrslowmi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xyqpypbq.html

TS:   // 同上
来源：http://www.xuanzx.com/163buiiaasw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tuqitwsj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163kkunojuj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163vdkwhiqg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vksxeqrh.html

================================================================================
来源：http://www.xuanzx.com/163peckopcx.html

G. 面向对象
来源：http://www.aibaodan.cn/163rryiwfww.html

================================================================================
来源：http://www.sxryk.cn/163hyodible.html

[G01] 定义类
来源：http://www.aibaodan.cn/163osjpyxno.html

Py:   class User: pass
来源：http://www.xuanzx.com/163irguixpz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gjhdgobd.html

JS:   class User {}
来源：http://www.sxryk.cn/163bgsegocf.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163dpoorbgc.html


<!-- 参考信息 -->