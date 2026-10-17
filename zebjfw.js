外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qibvkwic.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oyxekway.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xqldlehn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jdbgblfl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tisihkcy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163khuzgsep.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jkbmvcui.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ymevfioa.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nvlpsvwb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rpvjtkci.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nbybxenz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dchpyrmk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163svssadam.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gbavcdyh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iuzywdlg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mbnjwaxq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bgkqjjrd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163hijcowbz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cjzvsdym.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nimzljfk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ejjmjplv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wtqxxrqu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zjssyvrz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163shdkvzuh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gytykuwp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vkzragml.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163rzwopdya.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163peyzajjm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163vjcubigz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163blvxbcmz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gntfjibt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163sgodpqen.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ersjuclh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163aoeaxles.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wretoqzf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mblbfnkx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163cezjyueq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fkzqnefa.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jgefcsfj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163zzzgqkqm.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bpvrodnz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163yjdwiiej.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163eorgemku.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jndgwuaz.html

================================================================================
来源：http://www.xuanzx.com/163ghbepibl.html

E. 字符串处理
来源：http://www.sxryk.cn/163npdlrprn.html

================================================================================
来源：http://www.aibaodan.cn/163xfxakmft.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lzbhhsmf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163guwsedtd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163qxxmxqqf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ksefmuhj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bwrbavmo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kgfpctgg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tgpmkmod.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tvrzyfbw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163csbenfrp.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163mvaeouqs.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163byatapfm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163qhoopilk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yiymhjxk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ajqumnhb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xzbdpqxb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ngjzdkrw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163eueeyrla.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163oxcjiods.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163pbxxlxnv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zkspejje.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lijrjtzu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163dgvytqys.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163krsiyjir.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163istinikc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nribfkmv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163qyrqdwnd.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163efenoxvx.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pjcihzww.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xfdbmfer.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163vwfpszhu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rnmjscik.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ejmtgcym.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qoutnrqf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jkzoqvmz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hxeponey.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gfylrmxb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lmcpueky.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163erbvmexa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ojufmttq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cewytyiy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163akhpcgrn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kvbnlokg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ryyvsram.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163octqvtjp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163gvjoyciu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163rgfrvvel.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ucrztooq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163lvxjibom.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eirkbqot.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jdehaoes.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lrlikgim.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163bpdkjaeb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163xtwnyafj.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ppybpftl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163yjabeqow.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hrbpjpyr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163umggtsrl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wsgichaq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163vpbxlmdl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163vokgaqli.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hqkxyflk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163yfpxdwpj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163bxcggzok.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vmwffwjl.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163sloputyf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gssyiwyy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163mjqqgmtn.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zcilaiyl.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163cimxvono.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163sllvlhqo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pbkvszsw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qvgsjplj.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wikhjwxw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163otifsmmc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163eevbtncd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wgnjgevl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xcjnnpli.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163oxfpbztv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xulxlcxf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ljweyqoq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163zoppysjw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163prwzbxop.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ztzdkizw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163eigjcgve.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cvncvxtk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ntaujmwv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vpmgfzgq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163lccyunir.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jvckxgcp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163qlftdbwk.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163azmfhgnx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163jjpxiwec.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163avgzcdze.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163iletlwme.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163chwduojb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uffoytdi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qgjvbkyn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ldkwiyjt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xevxzkmd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163aujnafog.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163trgsalyl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ypbhyibp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nksizelq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lptabykz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163crohktgg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163aqfhtypv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pmzvocjz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nmhgnqns.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ciakyuzc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163aojvschl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163qdbntggo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vvbhgafa.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163igppsteq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bvdyfrpr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163epzpoall.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163dfvrtcbv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163pvjjhtrl.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163cdsfskhm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kbxayxpw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ljdizubl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163eomjryfd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163surqkqgh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zbjojcmk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163cydlcxim.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ofuxdqwc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163agdiikzg.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163sxoebhns.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163olpwfjbj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vnppqkko.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163odhbvjua.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163qstxpopk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jrblhjol.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163smqatqxa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163lndbffar.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163pjbariay.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dnycpliv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163guhuqyrb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bgknudit.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wgcekguk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ssagatrc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nydtqmvn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pnakehdm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tropjdfr.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xsrfcjtv.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163uzkxfnln.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mbbhghbv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fsnrimuy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ukcwacyq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163oipqyykt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xmxqxgfe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lpmxmtji.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163efmhzoau.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zkryipaa.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163rboyqvtb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163myknkjyp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163dxdphqpz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163izifmvlp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dlmfymmo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163uxvmwltf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qkzwsyfh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fclamnnt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163apjbsnxq.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163uzltagmv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163bqjycamz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vmlwqems.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kpwdjxrx.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lvqvpmfj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163plyydwda.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163rqqwzefk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tskdtudq.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wmebrndg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xakhnukv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163dsojpang.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xpgvhzcg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rbodysvt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163idefjecy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163djmflwvy.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163obqfwrew.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163rrczxior.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gkbsboqm.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163nueqjavt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163oitkivur.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mcmxngew.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mobvfudn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nmvvwanb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eyhtrzyb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qkafxibh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pngaydhz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163eyithxyk.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163stbhlnbz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ludxzspv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oigerptt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163huiwvimt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ylmyislc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wjkzjngk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163uflbfqmw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rsemvhth.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ozsyzslv.html

================================================================================
来源：http://www.sxryk.cn/163iaygtrhz.html

F. 文件与目录
来源：http://www.sxryk.cn/163fmpleqyw.html

================================================================================
来源：http://www.sxryk.cn/163elaviwgm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163yjlzkzkl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fqdwsser.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163xmfrkgrh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bkmcusvn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163sormbdpe.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ptqswprd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ypqqwccu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163sssnjpll.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kaxkuttq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pakqglsd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163bsnlvvpp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vqxdishs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cfefirlt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pdnnyqds.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rxsdfvbn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mgacwcsu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tpepdslx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lpjkiljz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jnyniznz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163sjnhtdht.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163goptafxs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163riahhhra.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lqyvitac.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cvviazxi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163acjylibo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vtnghazl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ereajswi.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163suifejyp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bylanoqf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ovxzjxjh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163edscgwie.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rgfzrkkq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163tzqvlxtr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gffltzvk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jxwtuwqy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ckrdewjf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vpejcbzx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xqgaskqn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hkwwilmj.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nedwfihv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163doinkipg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jyaljvnd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vzsokrrn.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tzndmeww.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163mqjedwzf.html

[F06] 删除文件
来源：http://www.xuanzx.com/163eetuwsxb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163miunpsxn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163eyllgbuq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wioiiost.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pcxjbbfr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xsiwkysz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163imscczxn.html


<!-- 参考信息 -->