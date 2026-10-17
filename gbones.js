外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163soydoubx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163vygiktvc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wgvavaez.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163plytswop.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163sxxkrqts.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163traoqfhi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163kicvcztn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ktlhuzbi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163uwrgikwk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hxvptsrz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cbylhhgu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163clzhfokm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uzgsluoj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163kmrxxdux.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163naxhqjsh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rggsazae.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wdzfzwsy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zwovfndm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zudjkbiy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yabeqsmb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pongleqg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163oqtqlxmu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163fugagaib.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gnzhqlzo.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163eruablqp.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kmqcoeqs.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163tbyojbxn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ikyfmcia.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163uuqopfhh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ukbpgphr.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ogujpaqa.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zssfoetw.html

================================================================================
来源：http://www.sxryk.cn/163fjyutqmd.html

E. 字符串处理
来源：http://www.xuanzx.com/163zrfbizqf.html

================================================================================
来源：http://www.aibaodan.cn/163ubruotly.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163tqnynulz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163aoguzlgp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xlkocjfk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iloecwui.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163osmusczo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163auqahuao.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gtsksibn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xobrfisr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wihzfnbw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163elwwfamg.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gcdjfsdj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163dmoifzvv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fbwuohna.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ahratjwi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ufbguaeq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163lweiqeza.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163gdztabtx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163pxmlcwqt.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zokezrfp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rbcqzxls.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163fjnpuoep.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163dhyegkbc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uobbvixe.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xpjbkfmg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163xljebnjq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cpoaikqs.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ivvahxjq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fleiurvj.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zkmcovxx.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iptvnnof.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fdtqetwu.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ddxkamff.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hsbtffvc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163nadtskhl.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163agnbwbgs.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bixexteb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wbxbnxzq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qwcvyocb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163woovltqu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oxjktngk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163qmxtoexm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ienwspwk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rgyabgfg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xzvtszhm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fofqengz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wtemdiqo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163psuqurzq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163yzscoryv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tkdniqlk.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fnbasywf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qavalayp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wbulirul.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163uxubbbcg.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hgjmrrsm.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zuopnhiu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163eywkhmbx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pmayhdzy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ufzyxahb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163aalxmuni.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rnhpqcpl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vnwzuhap.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163iitzeaup.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163jqadjjxk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rigciwdd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xfxvvuzz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ylcgwjjp.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ybbxragj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pmabfdns.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163kfhkgouh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kvksmbhh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163dcogsiyr.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163spmyrhlb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163usvdjlgh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kmbpdczl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163pdvsoufe.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gxjddbiy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yomrkuha.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163njxttros.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ufropcgv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wrjpsytl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163byxojpgz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163knsgzcbu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ovquutrx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163yupnimul.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163poyuhgyu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163plsyivmm.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dtxixllm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dhubiffj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vaswpbzy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163iqzuzgrx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163szpdllcf.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jgyomfyj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163wysidkot.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vognjzqh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pymisjmf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ezctlddw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hjfnxcfg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163hmcjbldd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tfhphycj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jnvhclly.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hvjuutck.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wuphuugl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dqxcpmmy.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iiekmkzt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163mussmuxx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nqhloymp.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163unozktpt.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ewtiqzeh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163mvojcybp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jtgtbgef.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163fsseobkl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rxexrwwy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cgklukql.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zppkiarv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163uezjdkmn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ntcdnjle.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nsvngrnd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tdyacjux.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163eiuwkyff.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163xcxctsbs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163bmlovpip.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tfeltnqi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wlwvuvqf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163npxiemkh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163slmkpvko.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163sopxxpvm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163sufyrkew.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163apoejkkv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ntlpchrr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vfjoblui.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hxbagiag.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163fazyoagp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ptujxvtk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nnyjzafj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fpknqead.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wdufdkdj.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ujltevwi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163trhsynqa.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163svsunnjc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fbetwicl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wjjcgwqu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lztosefa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vkzqtyiz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gjydlnhr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rbptkhtx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yxrtmupf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163kbpsdtnm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fablrgek.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163idwsdaqm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zhyzxdnn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163rfoaxkzf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163pylsulqc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jlkxolbn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hsqwdxmq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lqebsozx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163sfvkeuda.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163poyeoflc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yroblatr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163mdiwyhgh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vzseknao.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163uymmdssx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163qnwdcvbl.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163htchqwgu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163urdvfwmm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cuceqdlm.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163iagmrbqo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ipotjjgr.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jjtmador.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lxzorqnn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lrooivxk.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mvhtvrge.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tfmkjuux.html

Py:   if not s:
来源：http://www.xuanzx.com/163frrlzzdh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rheidcxe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163huaxlmfn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163tgyhszhc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ykukcpdz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163iqoqxbdy.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163frlqwzbd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nvyrwedt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qqlywlen.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fbuuvxrh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ltwrlahu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163klqkrxmr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xejbdfba.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fapgixiz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163sbgfzimq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163zwehfhxg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163fktawcbt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163slsiegsg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tnmjhykj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163negmpckk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xsoqpqla.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kbaqewet.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qkyprkim.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vckusrrq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163maabeeoq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ckocgbwd.html

================================================================================
来源：http://www.sxryk.cn/163cljjkiuz.html

F. 文件与目录
来源：http://www.sxryk.cn/163ggkmeeyt.html

================================================================================
来源：http://www.sxryk.cn/163zpmqzoke.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dhggsosw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rlcxplbt.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ostctzzs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163lvxsreyn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163exryahfv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rvrgryal.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fqgcwtno.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lwikness.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xizsjokn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ubgvgwlj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wxckgdjo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rhjvnmcv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163psctwmhj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cmxeuurx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zmbjubec.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163twfimxex.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hzxwrphu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163uakhahyu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qlpiyvcl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lygzszvv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fxsmrhuj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jlphlles.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bluddrkv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qvapemog.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163byzucydj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rkpkkukz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fthksfco.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163raizwjxr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163nksnuhek.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163yvwffsuk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fjmzwsbl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bmalxezq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xelynqzs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zyvtvwbx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163azhznfxz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kochnbrf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163cbsfgxon.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bjstnmqc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163oweqfuqy.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qaennoik.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nplfrsfm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jtbdxcng.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bnaxelpz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xjxlglyj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jvojjslp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kgmiecmv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lgxzuyxm.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ymrcgwxv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pppyqrez.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pnkgdlxv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mxtfmxzf.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qaeiwznk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vlyatsmo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jnvgczvi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163dlafqnza.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ezjrojny.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jxbnbwdo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hprvlnji.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jaadgyat.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163blpajmmc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ubeokwjs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pkvddelk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dgbrkioi.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163bernvnuv.html


<!-- 参考信息 -->