外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163zexocapr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qraqsfvy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163pjzfjqxs.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vivmkrtr.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nzqzosya.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dzingcdz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ncrfdccg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ptoniwno.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pdyusdxn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163dzrbhqsj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jcrgyyzq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163gzbcallc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163xonwmbwk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ctcyuszv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163votbzayn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xrktfelz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163eyaexxmv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tgjqjbvc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dgidbuhn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bzplvlfd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163espftsrr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gavrrsdy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163kwrdvkri.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163igyyujuh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ktdhspzz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163phhyvinv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163xxeofgqk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qaxvmylg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163tzchzjaf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163sbltjdzz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163msngktet.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163cjqalrdq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jxsfozzy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163dkmyfway.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wfwbnxdn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lyrefbxh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qkggthug.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163aznisbdx.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ppmfotaz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163dwpkevnl.html

================================================================================
来源：http://www.xuanzx.com/163mcbgcjnv.html

E. 字符串处理
来源：http://www.xuanzx.com/163nfgoaozu.html

================================================================================
来源：http://www.xuanzx.com/163bqeihbts.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jkwagviw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163niyumezq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jitjnjfc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wgfxtoqn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dcqtvadh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163sotiyujn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bdgslqkl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163alzelisf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qoowocjr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163oshscsjh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jxfdcxic.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zniatmwe.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cqinvmci.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jepkwufw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fwbvoivi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qbevqerp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xicrrzgu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163fpdllnvp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163owcbbujm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hgsiughp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ebsghjdd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163iaowpans.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qadzysjy.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ftiszfvl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fjiktoyd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jvnawolu.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163laeocewc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163exaocyvf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qhryazjt.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163bkbrtgbu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bhumfihc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163sndyygzp.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qlfbitep.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wqwpabon.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lbvrqjzc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163iwqicrwt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qkzrcluw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pqfmgynh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cuazssbd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jftlnjut.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163fkpjbpqk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163quiooemg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pdigpisq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163wsyztkal.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163bnwrrfuq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163hzdqlyjr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163yxgbbvgl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163uwzvehrz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wxwryrdc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163stasndsb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bizlyrld.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ugpylexw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vlqhcvhb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kxxsmiep.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163vhbkdwtv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163uvdfwdmx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163dokwxzfx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qdefknaa.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xjzqysck.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pjlyoqtq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163edesnmhb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mcqlrqtm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rmpnhmhm.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fgautfgb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gnosjphy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163rrmwzuzr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163khbyaqws.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qngqelyo.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163sldatjrj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ahbcshsz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163fxdghdzd.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163czikyzoc.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163skuprbeu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rqatyviq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163xxbqftzg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lhngrpel.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gruankgj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163uvawsxvk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163fbjxssja.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163aztjizyc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163beoutqvz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163blmtkqxk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163emcgjqwi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163xqviqcvt.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163saygdfbh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pnkztfot.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gekjewvc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163wbxwmrmw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xwmesswp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cdshjkro.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163phtdyced.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163psojfabh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ymjehjgn.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vujloaqx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kpmguisv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163isbobiux.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gxnhvfvc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zchkdgcs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xigbzrqb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fxunanxr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hzjdgkov.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163jnunuwgf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xfjhfahw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kfnpoexm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cmlvmnqr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163iroclagj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pyxinuyx.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rsbntgif.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163eopdvdze.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163gevlksvl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dxiwqeql.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fsoujsqu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zjauegus.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zllpjdvt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163yryzataw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163makadolk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cdragwym.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bbvgusia.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163tosbaocz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163phfnjkxs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wljgahif.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163uvaexiod.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163yccoopft.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ohuqohem.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hljslmqh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bfarpxda.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rphujmaz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ofxygczi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163tjozvcvm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163dfqqyzxz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163nexvkeie.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tgedzahz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163cimuftpt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kjdgoxpg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163nijycbre.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bnfygeze.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163luhukbbv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163iayyaneu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163eqckbpqt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qdiayrvf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cpxhgvho.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dzlscuoq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163iovcmpkd.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ukokxgtx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ewhawuhx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pabnhbta.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cbllgxir.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cdprlknr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ezscpfuu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wiyrmggo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163tselciug.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bzvpvkuw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dtegrvxt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163gfsppmcm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163zedncxky.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wqvbwcwg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fcfccpyx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pmalxqau.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jyhvmdlk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163owkbmvku.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163utrawwfa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uwjnexcn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ifstbgbc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ytptzzsu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163orjbcgun.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jimdafbf.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vcyazkka.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ctlcqqgg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163hpkvijqm.html

Ruby: s.lines
来源：http://www.xuanzx.com/163cjtertvy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qbwsjzii.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ucambuui.html

Py:   if not s:
来源：http://www.xuanzx.com/163vsltpger.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kpjixwle.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163yoheosve.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163softicbh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163wjxkozad.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ccrofqna.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163sslwynjw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163nllhjxgo.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163kvahtlcq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163xtmejznu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163blghbqnd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nldsalze.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fhjizrqi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xufavwxe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qsyxizyj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163tjhkaylz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163tvilmlwz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pzbfzkmk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ezvnnvnf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wyvxsjdc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wjsnjtow.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163liwhisvb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163vgitzkpq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cinazbcd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163csqdhxow.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uqmvpcew.html

================================================================================
来源：http://www.xuanzx.com/163semzvffl.html

F. 文件与目录
来源：http://www.xuanzx.com/163iitmabhz.html

================================================================================
来源：http://www.aibaodan.cn/163dtzhljcg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jzxtftjm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wqoxybbb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163pcmamwtr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dyuamthc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ewvekjds.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qlgivaej.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pjidcigf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163iheuoykj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mcsdnwsk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ewzztcqp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jqfvqgsy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163izfgrbie.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ojkvotlw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xciohhpk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dnoysfol.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163igphlqba.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gqddyvxp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qixrkepl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xrrwvhnm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163fprjhbuh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163pknrtpzq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dnpnukym.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nuedamon.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163hurrmdcf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ygoceuax.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xhyuzrys.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163pszyqhrc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163iwfhwkjm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bqhtnogi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hfxznhsu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cvptkygg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dvvioojh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pfstktaz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kyrsauzk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mhicdlog.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lykuhufp.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xgilmqxw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163avedioin.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hmhbclgb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163whfkgxmr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ttaqvphg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cbsjcmcj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tihpyyjn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wghdycsr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rdxuslcv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163fewdvgjg.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ngqbhjpa.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gsttpjmo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xvrzfpdb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xmjrmglm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mqqesokh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163upnlbuut.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mngpwdqq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163trgorptc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nxnlomgt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163boyjftmr.html


<!-- 参考信息 -->