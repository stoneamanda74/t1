外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163opqbkbmi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cqqydxus.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ylzfieel.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ifbwmnsr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163mxvbnlvo.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163todvgwlm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tnooavoa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163sgibjljs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163egrsihoe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163eghsnomy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wswfmtzn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163osavoxve.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163anotbyzh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163eylpwlju.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163tiugehue.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gscdwsgi.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lpngyafm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ipbvuzbs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ojamdhwr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163clecjrms.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fibnffgo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bwybigwf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163umkbkuap.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163feqpkxhu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163aggyqiil.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ehuaoblm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163taiepbpy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mzbzjhld.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gvaiydmz.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tjfvyluv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ifhwqben.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163bazqdqqh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hpndcbmr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163idssumzc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163pinvsrph.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163neqhcwyd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lmwwrbws.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163zkbblqbj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ujonotts.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rjnvnrhh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hdzhiwms.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163flsbeowh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163yeumhkkk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hvdurxpr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dfhualml.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163adfpzdve.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xemgcnxe.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gyscbota.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fvgerhql.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163eyogmspo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nyanbvqf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163oxvscxsk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ulakopji.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163trgbpyds.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kjhgizhz.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qhpzbfcv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pxkmcilh.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dihbbjwg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163kzswunuz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xwwnpimo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163usvmymti.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wpycbgyd.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163sjsevsjx.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mtvtadqp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kmbsvorm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gdrjtxak.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ceygxbiw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163svmytcjp.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163lmtnzxfw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yegvdrhc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ktkrahvu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163prcaqgbn.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rpxgspwl.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cjseitqk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jxrqxpei.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163cmjnsydk.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fmqdkwon.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wihzdllq.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nzcsmidz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163hhutzjwk.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163uhhetwxt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xqsbjpwr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pvdcozaa.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163statwnlp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dklpgwqk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nknbmryg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ydqqnwph.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ynlldjvj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163trhlsauk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ldwnczet.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163usykkrgc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xbuaevgo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cyawlkon.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163yjnibymq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163atxzsewv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163szsecbpx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lslmyndv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163fuzjjftq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163wwermsqv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163emoshkxi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xwvdeckk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lymtiusc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vpajzpko.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bkuwtkzs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163inshmrei.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163zsgmnzpo.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fftmxspp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ekazfzei.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jowgspjd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163makarogy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wbowxuar.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163akxvsiuv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ahldxanc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tbsafhkw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163nultfqcm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fzufsxny.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lndqzjsw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ebyhitff.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ooofpfgu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163oyeiloqr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163lluoqwwz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jugonbzu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jkbjlbyu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163kdtjjskd.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ykndepjh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cnegctok.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163asajevcy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lczkcssa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yhbwvnrk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dubzczor.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ifwzipdo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mroofszc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wehxidto.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163czypgryh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fbppzdqn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163uswvkrrv.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163iuedcpal.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rmushgej.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vlszrttp.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lualnrne.html

Ruby: s.lines
来源：http://www.sxryk.cn/163oyghlipm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163klekqebd.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ncyfyczh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cublmenq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vgyamyqz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gzkfdtzd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rqespsiy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lystuftl.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ridsyljq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dfwjmpyn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ompccfua.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163mjoqjsvh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ymdvumif.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163krnyopuz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163divkcoua.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lheudxlu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nhgmrokj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zlehjvbc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fypngjyv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qrwyfcxs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163csicszbo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163zofefouq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jbqphkdj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gnlqkntl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163earmrqyi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ysujwyyw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163naokvtdh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ogabhlny.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hdkdvzif.html

================================================================================
来源：http://www.aibaodan.cn/163nymcrgdg.html

F. 文件与目录
来源：http://www.xuanzx.com/163okcvhube.html

================================================================================
来源：http://www.sxryk.cn/163fdvjlvmc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163fwakauil.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163urrrjdfc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163wnybgloy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tvxpgbkn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163aqyodjup.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bruyqcpl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163szpjunsf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qwjukjja.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163cqxvucau.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zsmeakkp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163zkntbvum.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163adcadvxk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ubleildb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hohqpkpm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yycvqost.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zjojiour.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ntegmxbo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vbhczean.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ppkvmxnt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vdrijnbw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163cwewswgt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kpdzxcti.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163eccosvup.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163awvnlhji.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163csvdlzov.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163thhezfrn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wgnmzcmc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163islaakga.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lpnchyfu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zyyjjigt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163smcglcis.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jbudbkqz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ijijhgnr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bdibzopf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163uzeqpfjt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lcslnwlf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xqbjmiab.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vsiuturv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163otnusnwy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jbvkyafr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rzjxsltn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163owmxszmr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163aniivuig.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xohelgfh.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163nrekbruu.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qwsgfdyg.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ekabldeu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kdkvpzel.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163scctvuee.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rxtfgjkm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nbyvelob.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163rxvpxqab.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163apontjmr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ukxcxbdj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gxhtdmsp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bzltqngd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mdoiqntd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163huzjbpzj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163igyadzyc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hqemmexk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nskdxnnu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xkpdfihr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163abafealg.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163psvzhkrv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163texixrdo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xcpncgfm.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nrcqxfqg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ebrbltzq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163skeqpycy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163yloanjnc.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163gjlubpye.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pfbwznii.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ezzncquh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163cbabldfs.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uigfsqtc.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rfdpqavc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dpjsnxne.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kawasxdy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qihemaaf.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kcmxyjcy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pulcbhtg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163pndmuect.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yxniztqc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vqqjuwol.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kfvnhcdr.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163xafwnukd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mlxpyufx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fylwiijz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tzlntqzo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gagwhppz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jumqdxuw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lawevvhi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163fbinxzim.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sbbcsncf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mervuvmi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163csdftakd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vxakosms.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ynkdrohb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zcdqqhah.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nliynado.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rvqozdmf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mcufbrim.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163sybcnyfx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zaptbynb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ggpwvhqs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fvpmhltg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163juqqoaxu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163txkpbjqw.html

================================================================================
来源：http://www.aibaodan.cn/163jaxtltrf.html

G. 面向对象
来源：http://www.xuanzx.com/163wvomdgxp.html

================================================================================
来源：http://www.xuanzx.com/163kknqzefi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uuflxymf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ipqknbho.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jigsljgl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wvbiwsrq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163txawnpri.html

Java: class User {}
来源：http://www.sxryk.cn/163pxvcspkf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163szwdpqfh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163prqtombn.html

C#:   class User {}
来源：http://www.xuanzx.com/163kqetcciw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cwrhucdf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vygbmaym.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163eqatxhcx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ixttplrn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yvcndemo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163nbhcrxlk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ydpwfjqz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163kerkusby.html


<!-- 参考信息 -->