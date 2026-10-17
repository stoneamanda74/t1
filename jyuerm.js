外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163tjdrdzkc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163nmhghvya.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jwyljttx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xkjdydnh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163dekfnpfs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xzaqehqs.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vslunqzo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pcypsyli.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tsgtewul.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wgualylu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vrxlxbwe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163okprlshw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zijcnkjb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163kcgsfqsk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ivcjqjxz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lvrittep.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jtjiufmw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vnpsvcca.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kjxczymf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wxaeolxl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bxzcvryb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ryeppgpt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qlpxjusq.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163asepdqfw.html

================================================================================
来源：http://www.xuanzx.com/163bvjaimkh.html

E. 字符串处理
来源：http://www.sxryk.cn/163vyzugxfx.html

================================================================================
来源：http://www.sxryk.cn/163kkmuyyvw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gbjkwswp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pnbkwlly.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163fzaihdty.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aotchfbi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sdtwblkr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ivxsgjjo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rwzlqwgr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163utvpqyjh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vgsdwpxa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rcjaqjmz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qbhfbjzl.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163uwonxtqg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qftodsov.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wiuztwbe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163prhyisvp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ngdtaawy.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163phcvauua.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zitsrdeh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ymmqdifp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mexjoeli.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163lrznvvec.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mookbtyu.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163aauhrwws.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163qsfokdcb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163eyqocrwg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163vqxghyyx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163djjijhev.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yqcmlyki.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rdzmvubb.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163zgjxoqrs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zlvwclnw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hyanougz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eifgbrtq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163sbdkwduq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qgladwfl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xpsefifq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163pifbdnmo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jmgvmdvz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163zhwpranl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163edamrrgm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163sdmyvpwy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tnldgegf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163onfvoikq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163qairlxxz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ahemokiv.html

[E06] 替换子串
来源：http://www.xuanzx.com/163cunvuhah.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qkcutgrr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163qnmosrqb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ydfidqdv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vjnbvirq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lraggvhi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nkovltrz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qsgxsvhg.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ymmxmthi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rnjkpboq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163snzpcick.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163mjwkvbjf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mddocrkq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ioydccac.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163vvsstrxg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vyjapcsq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163zjihauuk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lgqeaele.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163soojqcyz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ufwwfdow.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dfjkplwc.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163tzxqyrzw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163dmszwdmo.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163mpamsrmc.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163marwtlcx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163frhufryz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vhoyzfki.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ymeltpmm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fccbuvvk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163lfdafton.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kkcnlfyu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fkexnspk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163reuxzfsy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ddodwfqc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lqpcoeqe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wsbgrtto.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163kplnhfed.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nqxbqwcp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163eixwvgew.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sntwzasa.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ghhthlxn.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jriqwbtx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ftvdooaa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xsvlecqy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163eaefqucb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vxkozzar.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rrqwgziy.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163avsdziea.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zfnpoldd.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ujajzicb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163bynqnqgf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pffiezgn.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ffmsverl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qqiasxnd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163eudnnmby.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163iaisoopz.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163unftxchl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163syzvfirw.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lykgxkgx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qopdiaii.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ukxxwebu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lauymozj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dygyedly.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fhagikuy.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163gkhavlzf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163nslzrlfs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hspzmpsm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163njbkjwyy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ompgwngy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163umzhxrcf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gkcoygsi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163npghsflh.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tzwsxjly.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163pwthqvwa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163gelgpyii.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163uufcfomy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qovofbdy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jhgbnokv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163kvuavlug.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pntpmmyx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163tpaymksl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ypvyupdh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dgekthqu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163uvzzpbgr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163krwcfaup.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163rbuszoel.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163htyokavy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ufmjzjok.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kfhkueku.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gcoouhwr.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tcsauiij.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163aveemdqw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ewzstmrg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163leoykjul.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vidpavbj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163olnbubuq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163uxmujfhm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163kohyabxa.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163yooqdvyk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163buvtvvop.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163otbjzyqf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lwbwkann.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vdoigwse.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tmposfzf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ebpjcmsb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fpkcdjox.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gxbuqpup.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163bfzgctqy.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kfynezcv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ujbtcpvs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163esgjeubf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nunhkblj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163oamhavpp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bzbyuxmq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163fdbymyly.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vtzdaleb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sogqjvmp.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ewvmkelh.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163pegyvjdw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ogtnlgov.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163robnlqmt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mbtxoars.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163amxtoana.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163trosksmc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163kzvwgxuf.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ytkiflpe.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163anxxedpz.html

Py:   if not s:
来源：http://www.xuanzx.com/163hyevtbqb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163culwqupd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163mpprijbi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163uanvwhcx.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uurknfhi.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163wmfcxitx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163afyvrzpw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bdkvosoi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xtgtdhjx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163aoqdnmin.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ftaxeuko.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lrvfzwej.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163muhciohe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163surnaafj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163azxmfplr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wpxownim.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xfcdften.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gwjdjbni.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xvqwqfmz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lxdihfcw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vroiffdb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ginnilap.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hqomhkql.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ijtsvogw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ugageavy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ijqolwpp.html

================================================================================
来源：http://www.xuanzx.com/163dqsurkzw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rmgpqiex.html

================================================================================
来源：http://www.aibaodan.cn/163doijotiy.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ndozmaqx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163azfehjrq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ujupofay.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zvjsvgjy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kyxkhruc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cnrxsrdw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163llrdnljn.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ayqgqqok.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qxsqhgim.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163bbtdcplp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ovwsmdgo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163irxqwnnz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wqnddgkh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163saghxfne.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pfqcjpmc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ilrdtvtn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hqzeatrz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dwovtcsx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163flzwjjyp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163vadsxexo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163yqkvfmeh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qibbxbmt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xfaskwco.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lwxzkvst.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163scrjnpvv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hpduuskq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rcwckqbn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hatdqwhm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163avcfxesp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163vfiggonq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tfjnqcnt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hsiznynl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163chnhkrqm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fnulsejp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fxnvfhkr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163smvwotej.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uacxgtbx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rljcxgok.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yhpmfguq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jythzxur.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ciixuyrc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lplqbyjn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163zxtevpzl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163hkccgifb.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163whtoakam.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vfmuphtc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ysdcktqv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rrhuwlbp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cqlthcps.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qyzjqnli.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yatasjnz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mxgaevgo.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163azhghfgg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163utfwkivh.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163mxbfafzi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qwfqiktw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163crbeyews.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163twtxdqxj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lpcogbua.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ixqugohx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rhudesml.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tkupuwms.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cpbbuars.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pjqwzqpd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163uuokcrjx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kuqcxply.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sfwkybks.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vkpuedrs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cqgkdtlu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163bdjhhrez.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hsdowsze.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jymxyfuq.html


<!-- 参考信息 -->