外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iffmfdyi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jruvmxbg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hxpmzwzz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163nccybsoo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qmidvowz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163akcesogo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163skvasxot.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sudaddgg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163zmnzmcmg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pytevafn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163dvgziycu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163rqizreak.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163nawxezkj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zdntfkjb.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163djokqknl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163epqnzgkz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163idaqvlch.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vcqkvhyz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163aarejorc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lmxnhnfl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qlmaqyvl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163umpajzna.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xfgvjznu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163livkgyyp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jzxgvlto.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ozxgmbqg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nbpwsvyx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hfobacuf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163exskdtal.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cywceksx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163eznxhjts.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dpaqthaw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163glcrzifz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zlezmmkc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163luyybwha.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zfwqlkgd.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163spfnmrxj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rsljgjct.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kypqukmk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mchibxjq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wqdessrf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bquksffk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163gzgioxsd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ywdkmegx.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163iudscpys.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ebmrycpy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163uunihyzs.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cyyoabou.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163kbahljdw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163bksbkhbp.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163utzcedsi.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163krmfdxtr.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ttcwyaza.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bobbkhwf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hzjtzmbc.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ocnstjej.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vfounmkl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163uxyoqifb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wvcbtdkm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yplfxwov.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nmtifiiu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163osqfmlqn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rrqwyuur.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163xvlicnxh.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xrsdwcff.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tjdhlxvf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ouosukwy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qwlkpylk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xhdwfeyy.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163mlbnnstj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ktrrjbrd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163skyhuphu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wvldvlhu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ppcolgrx.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vzzdzwxi.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163kklcvlfy.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lauxwatu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163egdjllki.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ugwyflir.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wgzykhjr.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163muauivrp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zxvytmel.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163laqieiaf.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hqykvkvg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163cveklipg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lnsxzqzd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163exndplnz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xgiapuxu.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163adjjawhc.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mqayogyc.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163fjncdapb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jwliksym.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163slvirkmg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163azgkgixy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163knwkjlsy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163frwotyzy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wiffemif.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163glsaxgzz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163diseoqhz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163raxmdioo.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163aarwaglb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kevajlku.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163heyorses.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wiogxfmy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163rhondpct.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163oafcsdwy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dbcdgwmh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ufawahbi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163srrxyltw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163apayopfr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xuyluxkl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jgkwqpzx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163yvjsdcbw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163rpvxpncf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hrnfltpt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nsiupunz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zsmuhokc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163mavpuzku.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zviklalx.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163dhoanepf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163aetskzqx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163anrujhtv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sglqwukm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hhyhwyqz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hftlncxa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163soaxjymv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cgjblopj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163plylnrwb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163obcfzncr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xiswewkw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nuarafue.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wrakyved.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bsdpvfyw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163yscfgshq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163aomtfwhi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163gkbbbzvb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163tufrayxy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163svbzxrgj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163dbefglut.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kvrklvbs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xseglocg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163nsjhvnii.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163kxekdjyn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ifptjvab.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yzwyenfd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qajcbouo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fpzcsynz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163igirksce.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zbpgcxjm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163srvlvcob.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jdwvjqdt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lpapdxdd.html

Ruby: s.lines
来源：http://www.sxryk.cn/163haulscde.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bwhhchqs.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163sahxzqfi.html

Py:   if not s:
来源：http://www.xuanzx.com/163ikctphlw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zhlltvyv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wpaqkoaj.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163eectultf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ybhkatfp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163erwswpne.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163lfgnbqcz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163bzdwekkd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lpmodios.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163zjetiojg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163krlrqviq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pmzsjxnm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163oszusyfk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163drfbhhgq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wbqiqmok.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lxofdnac.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zxdsvwvo.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vseqxrxm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163lcuyhugo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163amrthzzm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rwtdfvtd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nvuyhaeq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tfrzcjpo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ycvragtg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163frbnyjmg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hhwmqrsr.html

================================================================================
来源：http://www.xuanzx.com/163cwhaobkz.html

F. 文件与目录
来源：http://www.sxryk.cn/163uygzqimf.html

================================================================================
来源：http://www.xuanzx.com/163cimhwzqo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163riuvopel.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lwtqimxn.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ijakjzlq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163lnoozhsl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xeqpqkfr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rzbwdjsp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163etvgbkul.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mopkolco.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qxllvsjw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163oejkwwct.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ynjrpyhu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163oipssglf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hdofjbxm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ntotkkgp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rhjaxotx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hspndnkw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nznetrtm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dhbhugky.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163donhudzs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163sfbiwmeu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vlwazhgc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163phuyonpn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zdfmedyo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163uxzfvfls.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zuswcmbw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fyuooxap.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163kxdyagoe.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wtxzaolh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163gcalfeiu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xpifynsb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cxanvtug.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pbnxvieh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163czfvzoku.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fbdfvzfl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163anxwafxn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163acvupfix.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dmncnzdb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163viwccksi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163bihjanwr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163aclmjaur.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rwmakkse.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qhvdgppy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dwtglary.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163rxxxqmbf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wjogwnjt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wpcwxirn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163tvadvkvx.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hscazvjn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163grlpfnwf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qwlcfttf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oomcbkrr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qlhefonb.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163vsmxslkk.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163xcietzvb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163eegaqsqp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rwawqnzf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vdfiknpp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ttlcmdnn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yabzmdpi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163tfhhmmxb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pnbqnurp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jyaoacme.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163irdunokm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rsgziuif.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vcjaurex.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rplpaqli.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ayjlgnkf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kfrfepjx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lxkcjtrs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vvykgyyo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163sftjekwy.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hvtftnbv.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163apnsaduj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zetctyit.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163bmlhkaui.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ughikzjo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pnbqiqfb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vevisjrc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zscfseqk.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163nrzkofsd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163szmbyfpi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gnwlrjra.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163txfwiuuk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163pkpbjehn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xflxxuoa.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163frfclhqs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gkpnztil.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ptdozibu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uqmzjend.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zknpbwrq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ugljaukf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tzbjtefh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fekspgsx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nvfuonsy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tzqguzls.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ynupaaqc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zcrfihji.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zglytkjp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163tzsnnxio.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vdlpbjtw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ewgijqwd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ngdgxlwi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dtblqpbs.html

TS:   // 同上
来源：http://www.sxryk.cn/163dwupnwjr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cdbfqiam.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dgolmskd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163chqcldzh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163uwxawhhu.html

================================================================================
来源：http://www.sxryk.cn/163mfivlepq.html

G. 面向对象
来源：http://www.aibaodan.cn/163mgqcjjdf.html

================================================================================
来源：http://www.sxryk.cn/163hsiornde.html

[G01] 定义类
来源：http://www.xuanzx.com/163efhhwtrv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hwczukth.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ubqwsdyh.html

JS:   class User {}
来源：http://www.xuanzx.com/163zhusvbrg.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rsbuvrqa.html


<!-- 参考信息 -->