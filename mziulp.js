外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163hthzrcnz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163jriygouw.html

================================================================================
来源：http://www.xuanzx.com/163nqxcndog.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gxgdngzq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nujwruuf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ftfmkluv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bqyghvjc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163srcetrqk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qmywnuuj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bipmvzzl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fckkxfes.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163pcruelrn.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xwusewvj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163jfealdat.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fasijwwz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ybmmjuxt.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163smegthrl.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fnydrdnw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dxxectkg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mzwktgoy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vsxflxea.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kusvekim.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163abkjfoww.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ktfwlnpb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163vdmrflsf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163locvfzis.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ahzlmmyo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163oazvksyr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163oobubyre.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163lmkdwygc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ksstfddo.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nexlsaft.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iqktrrva.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163jorsnfql.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163omelilcy.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163wvcgzgra.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163uctblyyp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ewlnvlzm.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ptzzewvz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bfqpyxaz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163upesyosd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wymlgkdd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kmxxpggj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mcawsrzi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163eshtndia.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163wfxffykb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gninzmjy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163cpmcvgka.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pimqwjhp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xrnqcjou.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nngocuxx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qidoouba.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rrcdhejl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pukllgal.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tvzbcqae.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163semgjune.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gditlhiy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163syfwsawm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163iwjmffzl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pbhnubkz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ffaxjxgw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163swyuigjk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163crzrwkev.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cpujwyqu.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wudrlmoi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163spynbknz.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163iflqahwy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wagqiozy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ofshmclu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mczwfinf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ncpepafz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163hdeqrcoc.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qpmngpcj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hlzwrjhz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163dqqcfspt.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xyroxkjh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fcorggsg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163twowmfxj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ymithnxi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gogubgoy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163cdicombg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163fwxxvryn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mdgyzfuv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ykqaljnr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gheusihk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163txtnpwqd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qpgcjbvs.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163usgsmjwf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163guzfzruc.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ffqqlpci.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163lljcdwzo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163uwwaksnk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163cinzhqta.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163tljeyshc.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163nfnryvmc.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163bzognltd.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163uelhbxmz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nbjjsxss.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163fjtcrtdu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163tmowgbme.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163nycchhlx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163upzjbkcx.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163pwazefoi.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vlavgdeg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xfitruvs.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wrohqnew.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vqbpefaz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163liaiffjm.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163lnlimyqd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cwiiixye.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163snqliyoz.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cpnwgfry.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163drufeaxh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hjasgcbw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163cdfdhdlr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nnnbkcom.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kzfjhkgx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ggemosjv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163dqlnvnan.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163aejzvskf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163exjssehs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163abjgibbh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163fzkbztfa.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qygwzkfa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163kupkvvpr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lszctrgo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xwxlltbl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qynzgbnb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hgqzcsrh.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bucffjdl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163igepmsaa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163rrwerxzl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163pfzkbjmn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gobeglpn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zltmwwjd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bywbhxrb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163oupwjkvt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wqgnwqtl.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163sbhtbrpj.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163zsnyffhu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163cryvuzbs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163lsnfkbfk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dqlvfkuq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ydumlsjo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163opbwmnqb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163juvxzqvy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ptowuzdw.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gaxgsijh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163cmvenzck.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wlfbjuqm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163sgfxahza.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163titbmgaf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ysuoqwpm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dhippqcl.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dibznvpp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163nsypgqqj.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wccazujg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163lccnkkln.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lbroiiaa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ujjmdxif.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tvpyrhzj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pxzefhgn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163vxkjqamo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gqeukayj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163thcyqgyv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163aatulftj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xeddchus.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163veupcjov.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cdfmlxyr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xdhruidk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163aaynlvfw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163mnsiomuh.html

Ruby: s.lines
来源：http://www.sxryk.cn/163vasduhhi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ykavhsql.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hieagivw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163bbkivaod.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163yeakeupj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163dgvthpqj.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zzuumgeb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163oulqjqig.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163pjnjvecx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ohkjroul.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rxehamcq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163fljertjc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hicleesq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163glemnuap.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qthcpwnl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yddxelcn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xhycmqim.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hzhsvljx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pvcpnefu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163cipvwclr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163yizdmuzy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ldsbqjgr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vhmaztob.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zogbuokp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163bjynkixp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fmpglbhq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163twatxyzv.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163crcsunqr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cdmcpkxe.html

================================================================================
来源：http://www.aibaodan.cn/163yekodzhu.html

F. 文件与目录
来源：http://www.sxryk.cn/163hzobwuaj.html

================================================================================
来源：http://www.xuanzx.com/163tlabsgst.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pjiqukzr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163esxxcgpt.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ensdrrul.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163brzhoefp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163mllyiirh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zwvjfzat.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pgzxvjce.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hucgsvtm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163rxqpfung.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wpsckqct.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163flmgiilx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rlzjsxre.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163oopihyio.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mofyldfz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mirlahge.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uptrpvoz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zehviqvf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lcogmvqc.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qlihfyix.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ubvwqdmz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ntncagco.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qmekxwpv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zakwdymb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vpktcpol.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ynvtbfcn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163catqscfi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ercksrim.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gzfyasat.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vyvyncuc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hfcjwafo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ttyoorwo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tvqrwfdo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hsotonub.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ibqgtpzq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rdczybsw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fzjvxsqy.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bnhqfpxq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fcmydqxg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163eclcvptg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xoeszxgp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gvqyaxuy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163elextbvz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163avwqafxl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ybzhxquy.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163abdygyyz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xfnejeql.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mrrxswvw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163oxspydbl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qqtugtut.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jbfpnjio.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kzhotdtn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163anlozmil.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dmqvcbfo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jjihrkvi.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163uiicgcpv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163iepyfxqq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163urylygcb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rxnecvjg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qpepuadx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qvswapoa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zmxscoam.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wjpqfkna.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163suagbeuw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163lgdizlxd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jvcopueo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163nchhabnz.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gpeanhhw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163opjdoozc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163abnakcio.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vqgqfwlc.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wwweyqyy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ogwcdqpw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hyddbuwc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163aslprxwz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163llskljns.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wyjuiygo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163iwvcrgqt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cupdctyv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mjwbvret.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hgfulavc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vrvugeew.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163iznwdcoj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zuldjtzj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dacghwgj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pvnpgfub.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163piowsvdq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163etvfcsox.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ykeibphe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cfhuvncz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163efctuuqf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rltlnfru.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hhfaknpf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qstfydnu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jdrljlyv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hmogxjvm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iskqyzvf.html


<!-- 参考信息 -->