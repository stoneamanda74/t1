外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163odovbfwe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zhlybkmh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rzrdzahs.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163jpwzdaaq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wfzponcq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lqpxwvck.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ontdbywe.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vqdcdytk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163jyspxjyx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pkenyniu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xvquaazf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qolwjgpq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163isikhfsz.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rjpehbrd.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nkackjlw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163prcxatqv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163mwipjege.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163zzsjccih.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163aphwjscu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fvxqvutt.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163eaezcxhw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163iarxjiki.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163butxzkdj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xrxrltra.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lnnpxvbr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163kwayqlwe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ydeyigyi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ltxsmwgr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bmarlzvn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yfvwcyda.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ukrnvfrn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xkcmzqkg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163gpnziivg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zwspqgpm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163wfolhdwo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wznbvjso.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163obgccpud.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163htswsxjt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rcrbdpda.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163lxiawqgy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163iwdacfjz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163csfeqdms.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163nvytrnml.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ejdevkdr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163eiixdbjc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163bzzvowyc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163gnearsyc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163lgzulejp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ssiokrue.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163bctorzbr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vmtswmky.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163niuvjcui.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bxnupevi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163kedxnsek.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fkkksouu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163orfbvsfr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ysalklvl.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xdmwbais.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163grstpaoj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bknvezoi.html

================================================================================
来源：http://www.xuanzx.com/163jmxcssvk.html

E. 字符串处理
来源：http://www.xuanzx.com/163zgbettnn.html

================================================================================
来源：http://www.xuanzx.com/163maubtdhs.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ustticwt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163aatolsqo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nybovszy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163glcnkaim.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163goiilikh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dgnpdtvz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kgywplqd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163epbdtgem.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163bsymhwua.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vexbxbuc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163apjtlozp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fodtvhna.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zbkcjuef.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zhwfbmbc.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ntzzmhdk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fnkgoxqt.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163eabjeprp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163sxrsnomy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163vwcxwiwi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tphafpag.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wyopkwcs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bnyrdert.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vqmgbakh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vyoayein.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mdppthjq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ubzobzvw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fzgeezjq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bntjfmpl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163secrueva.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zfsfyjtq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ykwsbrdp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fyecftgw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rhoitdjp.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fllujcfh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163uzzovlyn.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163fhbntikp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hmrtdbom.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xtmnwsez.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rrqgtmtv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dxqibxrj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bqslqorv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zcvglxdd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jxhxiafy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hzdqpkvj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163sqydfpfl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ypmmzvhb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163iixghxaw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fbrovolr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iwcgscax.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163srwxmeni.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tnknzagt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ukgedvnj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163iihqfaho.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mkxoadtd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jgxoyrta.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qwyqxmxw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163eutjpisp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ohmpoytx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wkpzhapo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qhrmeuyw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ncjzxtoa.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gewewixy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163bzodcupt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163svtatejp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gkzqskxn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mqjrrvtm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ntxgnhrv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vkhpiajr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vqjxnqgd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jfwingpv.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jyjangxq.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zrzbqgwl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163upqbvmym.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163phymyzzy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tbshgfml.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lhucyrkl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mwmhbsob.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ioumhjmh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rirurkql.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rfspagei.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163pvphklrr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xildxuyn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kqxtmaen.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tuffydpx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vjsxdpki.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aujrujya.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rmzxppal.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163kefbwjfa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fsayuslf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mtnhvckm.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rxihfxaw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163yopyohex.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cmjwauqp.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qiukjchb.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dwftewqi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qlesunvr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163rlukqlum.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163muolghgu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kviapoxv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163sddsqhfl.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163pouavyql.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163mvpnyijr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lhugewww.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jikkaero.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fsdmpjxz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cdplysps.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gjbmbote.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xjftqrcn.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rzaaitdj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gkuhnaqy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zquhssda.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tldtklzw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163klqvfzmf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rrqpaqfo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ekfldbzj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mpweeopz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163aelmqsug.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zszygyks.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ukajnmen.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ibvbyfdb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gzzcaifk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163lwesoriz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ymgxvazb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ttnihdqv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ckpviqyk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163hedrhmnh.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163wvfzwzru.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163thzmmbsc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ebylsqyb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gexiitbs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tduxntmj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ikarqtkc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163getkstpv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dccdbdtv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163urxwymog.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wkxvkxjn.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kiuxooqp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163aleleyrq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wdyeclzr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jayjrpej.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163icflogqx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lmbtcagb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163frlhinvs.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ldtkwing.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163twszojow.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hzzkccbt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163izfueomq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ryhttnkv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qnmxgvjc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163aepkbylp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163vxmqfkqh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163goonanro.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tucrdefw.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163pxbjbuww.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163aprhbzaq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163idnysusd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mzbswvqb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sjyjrqeu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163brtmxsfi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pigsrjas.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zramxkme.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gspfzixy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pzeopcnq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xemhgizb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nkrvximc.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jwzktlac.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qrzvecwy.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163lwxzrtul.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vjhwbzjl.html

Ruby: s.lines
来源：http://www.sxryk.cn/163cunntfum.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163osltzgps.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ljgqcqlf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yltjhybq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vpomkmqf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163cfqjbezk.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163bqmuraei.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163veuqrhck.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vownsugb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163zjsdvmvt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hufybbfx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kkmvwtid.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163iypzponu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ixetypnt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bhpvyxms.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vlytzryc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jdaqgoit.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bxbjftmq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dyrfzrow.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163mpsabire.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163yimytdhs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jdikhtin.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fbwhzofb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163inlvqqgt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gixcfnzj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bqdmlruy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ppujpjtg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163upoutjzd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163gfzkzdhn.html

================================================================================
来源：http://www.xuanzx.com/163msmxphtw.html

F. 文件与目录
来源：http://www.xuanzx.com/163addafxvo.html

================================================================================
来源：http://www.sxryk.cn/163ddxnbpkm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kptuolor.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163arskmxkl.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163guzqrfxe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163euicjihd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rbzrrggi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rlfueejl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ejrqyinl.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qwznavvd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ddrufjuw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mnyvdxir.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lfmocqaq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163skzrondy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163isdeofnt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jyosehmv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zukivjtk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lqnqmqbn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mfulkbsl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163syslmcwi.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ltgbsfxp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163juepfnkp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163kamvxlfd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jjjcyqvm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jymjulox.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163nzvcixiz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pjfadvjw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163kkliofyn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163envbihgt.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163yzqwqtlj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163njymxcjj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163absnnrqo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jcmnkzpp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ropmcerr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163brhjjpqy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163sgimmnup.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163twxrcgfo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gdcwawfx.html


<!-- 参考信息 -->