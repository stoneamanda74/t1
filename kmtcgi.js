外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163fuahccls.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xojovkxf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qsenjlux.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jixlbfuc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ubhhkfzv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163vhpgizfp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163lnozqzwd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163thnsrxeh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163erapaouy.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nguvjkba.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163jtcljhip.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163toqagwco.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kxmkcusb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ppkdzxro.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ulmblrws.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ixqzkwgy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163aeageehy.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rincqwxt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163xomhwfcm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cjuozatn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163whooarwc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163dlpynilq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163hboceiiu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jxcrngdj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163uapdmcfc.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qgqweqxf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xbtfpfpy.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fcuxtret.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163csxeklid.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lcnuinao.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163qjmdxblw.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163radpageu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ncudswwd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ypiwsugb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163thamuzfj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163yqkpvktt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163adnqbauu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tzgbhsyq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ktitozps.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kazymlyv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mygrufzl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kjyahvci.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xpaptrts.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163nglxcpal.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163vqwcqaop.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163uhfvrxwg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dqbhuriy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163egczrtch.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dulhzhfz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163plrfsgss.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ffboxpjk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mbzqlnof.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nismzcbp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dksxihzm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fpiqewvo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163pfcbquxj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ntsbtnle.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dmetblws.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163haabdfgm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xwotywuq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163emlejzlu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163kishwiuj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vctbffnx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qvqyneia.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ixsnzzme.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163joifldby.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nrgjoxff.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dqrihout.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wtzaohce.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pepuljvg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hjfkmuee.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163uylwevof.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dkcfgaaq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wgnyfvdr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rhwzjvgo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163krcapcrc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163onjzvfoh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163opebdmwl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163itubxfio.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163kaoytbkz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wwcutthy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163khfkyntw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163lvbpuyrw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wowajebi.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ejeradjy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163mxnzeatv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bzrznkap.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163geljzrkv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163uiftryok.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ckzaggfv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ggzrfgwi.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163quyysabj.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ohbdpcpy.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tqknjoaq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wgdgmwwl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jsantaoi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163egxgpwvl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gdinjjja.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ivmqkexk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rbreogqi.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ccdbafiy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uhzfkrei.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ejpcgjzq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gpmuhxbk.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nkfrhwjj.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163civapjvv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163aqgefpdg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163uvhkelku.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163enjvofbw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kodtrwou.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zixsqsth.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kywohzgj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mokmpqot.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fxvvprwx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163icigiurs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dbmzuxwk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163oockfukz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163roixvuwt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pldxugdr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163pgafxjzp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163eotlyvkr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ltknuxsi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163qozdyegx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163anzbgajp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lztbredc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zzfnxton.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xcuxdges.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163powlkrdi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163owhvttrx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163puwsdcae.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163kgclwzow.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163shnkyucp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fherfxjr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lmibpoje.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163tvvsdrgl.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163oyxlxjub.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xonpynyo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bihruqjy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vksnhvnn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163uydjyhiv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cemktrqb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163yazwwsiu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yvvuhltp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163azzbxquu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163boosfple.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fsmbzvpq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wzlwvtpb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dcassxkb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163psholwir.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xjkhxetj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163lnrotzqo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163zhkydsdr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jznadqsp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ozzgmyiq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xzxwmxnq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163axoxiwzb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163udezyvpg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163voybmxpd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tonciimg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vhladall.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zykgnaqm.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cmpashzf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163gexunqta.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hbwtoluu.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163achpywng.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ahzeagqx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hbdnzozt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163whqtfwiv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ylthmwbi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hxxeuqrd.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ngoepqhl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163jofjlcbk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xxlvhdac.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lliozbgd.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jnjcengo.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163zqofkakl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163mremxcbh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163cbjicunb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jphvobey.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vojrnfgn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ztakvfpe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163sulszfqv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bhqmzlvm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vxgcwbpi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bsacfgln.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rumdssbo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cwooutcl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tmrmwqwj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163twgsbdzq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ussipndd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zeynoybv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bqjwbrrl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iikhckxy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163etlmmhhy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wiexqeai.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163emmbiogv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163csncunal.html

================================================================================
来源：http://www.aibaodan.cn/163ercnayzl.html

F. 文件与目录
来源：http://www.sxryk.cn/163xiaagjpn.html

================================================================================
来源：http://www.xuanzx.com/163tciesczl.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163twwxbjwp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zlowgmyh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163wslhrbye.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qzodrlen.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xufrafgk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yptcueoa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163auverycp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163sxurztnj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163eofhqpwo.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yrvyntth.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ulzuiepm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wqcznlao.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163isfdhpqf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163abjtzkzk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163snelbvii.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nurkxojr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ppcbjazf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163kkqcnxui.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163radjslwz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mkbtvadp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zzsfbxhe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gnhzkwrw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jlizbjfp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xytynzwg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dhdmlkzr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zgyoataq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nfxismzb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mpzjhjea.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dxisjejq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qraenxuq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gmxkfcve.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tumdtayi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nbnkihxm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163nkxxqezp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uglhhmub.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163umipskjt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163uirgbbxb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163nuuhvuqy.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kohwulgy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lhoflgsf.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163npoijsxh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163srtlbygl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163fpdjwley.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dsrrixfq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163muywxgzr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163izfbliho.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bztjossd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163afguhwrn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uyxybswv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ydisxkeb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mnxysnpi.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163clggnubr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ifbenziu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163arlmvnel.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163oyfgpgpw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jjrpjado.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163voipggeb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wljelppe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163notfeqmx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vgydlnnj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163pxhbbawi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nnnfoapc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163supecgfz.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163omzfjdcq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zonzlven.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lfxrewrp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hhsmishd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163aauindvh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lxzwsljn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163argtygig.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mkactmex.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163amgzcawg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163gfziuhpg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pdxlxtel.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ymhdbbtu.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vthvfypi.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uecoimho.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tkkpwasz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163blyczitr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cttuxlwd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xluqbqjq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pjidceza.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ucsjfzxb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163odwuispx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163unzjtgsu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ttkokkcd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pcttxxvn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mifonyrb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rkdtphec.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cvlgglea.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kjmmqbgw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wdbvuvqn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gktjknos.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gskbrgtm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ybmafzak.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163kwxdugns.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163xgykogyf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pddsvlhj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qpahrxqx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163txqbymec.html


<!-- 参考信息 -->