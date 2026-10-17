外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gdfeitks.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pmmaaoxe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bfnydfxl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kgyjwqzl.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163leslpvbz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bhmkgnwr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bnlkffpt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ooaejqwr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163pplttgsq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163hotwdiiz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163eimrjjhg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163etaxwxbr.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dybdfppl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cxbywjns.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ezwpbjvn.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163mhatlavl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163msxzxngp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qydyievp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kxyahplc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rdqtalvq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tdfszyme.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163cmiwdrps.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ggorjbvd.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pbzprtac.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163chywzabt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wuyrbsgo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ionttwnz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nbowocjz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163kwhifkxr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hquvzptt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163fkzbxtqz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tzkalocy.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163mwubxgyq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163xwmrmdkv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163cwunskhe.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qjbuviyf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fsutpquy.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163cmzhahay.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163azracfwg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163nhiaalxl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fssxbrjw.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kzpszthm.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vjasghfi.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cfheskre.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dixviuqq.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dxcfgiqp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163acsrjyda.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163uccqmqdd.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pjhlgtmj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ygbmjbso.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wrgnvfpq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xaqxpjba.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ilyjrvbw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163umpheism.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aabgssql.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163cesfvndh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wqoeiuzh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jonpikgh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163erkwolvu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163brtxkixv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qimisnjk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163shkfygyb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pwztzied.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xykaqvwc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163czkleiie.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163opowrnjk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ccnmzjmd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ybcgjpff.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163txuzbdcq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163toxxjfvx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163demfwzdt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163fuirfdao.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lqztqjbh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vliheawu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ttbomstx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163uyubrbnr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wltsmstp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163shsqnqax.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163yvdivbcz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163emjmivdx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jgxirdba.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lztphuom.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gbmxeqfo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fjpwdgvd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163wkgzjerp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vcdsicmr.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163scocmuce.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bzuppuyi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163cszymkre.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163svgidiar.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bhojpgdn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hzrckowu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163navlidjg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xagdmfnv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vksvbajf.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vafccmub.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163lzdinxmc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163yojxohvn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163alvnyncz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163webogjgt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hmteusko.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qzqzvpqa.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kvkrwlqx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163exfaxqef.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bbpmgmvp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163klmhjxpd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163yxswbrwv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rizksatz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qrllquuw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cumhlgrx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163itbhynyr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gltjgaeu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163azaqqsnx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163lghamhzu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163viuunqpo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wljqtpvs.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zwczzydi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vkzdfzrr.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163yonatzcc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bketlqfv.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vopshcdu.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ltaiyilf.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mzxkvpmc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ktaguxyn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mljlhmti.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163dnfklyeq.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qpvnwwap.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mvvppzjj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163crgfaknt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nryquykw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163cyiqltyg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jeqvyyyv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163iymszdoo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xmoksxkw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jnbwoxvr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xrapfqua.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kidzsmoy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163txiyczcz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163fdiudwqj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gfpvdizo.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163shlafmit.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163mcfwptbq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163uwwdjrbr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ytmlnjil.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yjptbhrj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163exulcwhw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163auxcopjm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ftzjpzts.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nylygskx.html

================================================================================
来源：http://www.aibaodan.cn/163oiiqadzo.html

F. 文件与目录
来源：http://www.sxryk.cn/163ikjjclhv.html

================================================================================
来源：http://www.xuanzx.com/163wjwcfams.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163peusqxzl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163uflumedl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ldesgygs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hejgykdp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hmldkycl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uvlhkclm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vkqtszgx.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wszjlaji.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gkxsycny.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163eayagycb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gbmqqnws.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jzywiavk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ezfowhrh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yswsseng.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lgampheu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163poxwmiba.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ftnryijr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ftoxaggw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163kcwjmqgv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rtrutvfq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kdjxwxoq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pcfhqenp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zuaecjmg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163esupfsgy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ucjqqbrt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rmpxudbc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lbztkolc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hbgcebpu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163urbutyxg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wrhpgnpi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163onwfpeaz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ttipnczx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bqivcrte.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jmwdxysa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163wlpgngvb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zpuaofte.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qtoqpeqv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163aypzdwdu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163klmluxvf.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163stcgbbnf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xsxtspqe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aydwmauk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kgnggqkv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163vzybyudz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wbatdeam.html

[F06] 删除文件
来源：http://www.xuanzx.com/163khlzctri.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fcvftath.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qfsmgzbw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163oiztbrtf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rgaytors.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sycirhse.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163gwsrxqog.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163tsbitkog.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163srvmbino.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163bzfzsxmr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lwmazyku.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163pnzmiwsz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163muzvttom.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wydsnrjj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wmggjegl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kjqetdnm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kjnzgawp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rrdryqiy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163rxbjwbby.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163uycaurda.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163apawiyqp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jjulcljp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ffinuwbx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wjxrgbjz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tksywjdp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gspeuuul.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163uolelkpg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jxhekdku.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163hzvgapos.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ifcikbsk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163whnxheym.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zvbfencv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xtyvqups.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qwfytpwz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ednwadxt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163pfgmjzto.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163etmgtydp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tkkugkas.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163knatoppj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gzntlpuv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mjceacfi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mqmcsnrj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zwtvtobt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ifhaagae.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ubhwyewh.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wejyntwn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jpjkepkm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163heflezfp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163clhvsagl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tgsrarrm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zsuluueo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lpntoyjf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163evvpvuhx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163rcxuwmbb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163hbhlkfbn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163kawsfoor.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163eigspcqe.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163htykszxa.html

TS:   // 同上
来源：http://www.sxryk.cn/163xibjcvex.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fqtszrzm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dfkvtqmi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dzexbpyx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ihdabthz.html

================================================================================
来源：http://www.aibaodan.cn/163oiygvhzh.html

G. 面向对象
来源：http://www.xuanzx.com/163yzogvkxa.html

================================================================================
来源：http://www.sxryk.cn/163gigwwsmk.html

[G01] 定义类
来源：http://www.sxryk.cn/163dgpachdd.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ywidzxjp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dsndxwnr.html

JS:   class User {}
来源：http://www.sxryk.cn/163qmxazdcd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gqohokqp.html

Java: class User {}
来源：http://www.aibaodan.cn/163ylidmkrm.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163osilzdxf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gqfxiawa.html

C#:   class User {}
来源：http://www.aibaodan.cn/163noubdhwf.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163nspjcizc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163japhfpom.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163tjlxzbpm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163yavtrqxq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163pqrebavx.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163vnxilaze.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kcdgqmkr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tyhnlkod.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163nrehmbxa.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rxbkclqn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qjitjccc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163sfahenfp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cyfgjhfc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qbimrgmx.html

Java: private String name;
来源：http://www.xuanzx.com/163yssfwvvv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163pqqlvtxh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163aaioytjo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pkyzyhtc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163rnzgkdtr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qnjicvik.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ptjgdepr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hzgmlqmr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gbuxkjvo.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163btzyatdd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ztmnruws.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lwjsbxxf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qbwcfkic.html

[G05] 继承
来源：http://www.xuanzx.com/163wwskwupz.html


<!-- 参考信息 -->