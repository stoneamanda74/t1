外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163stmgvqcz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163exnhheug.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163parybnpn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xqmtnpyv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rmscwpvc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163abgtqcvk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163tytppbvy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163snkdjbvi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nrgxfibs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tsddmfhj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163uxohcobn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nzdkjcri.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163nbgekvgv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wpnhhxbc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ntzvwdmi.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jupfsarh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aabtzdou.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vbeigwit.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ijtzchyg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uocctqgi.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163urypwqim.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ftpaqudg.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ouuxaitw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kwgjkdzn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rhcmsuyv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xduvkovd.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ahekgknc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bcprakai.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hfgumcts.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163orywpbbs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163hfpwjcux.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163peyqxppq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ynrzulzw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163evgqlooz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fztscldj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163taogtipd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ihscphgv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163zlfdewnf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kbgmjttu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163olrlubkg.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163yewxnuny.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dvgdtwoa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163clfmejup.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jyeeorgz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mfboqoxq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wnlxkbrj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uitrcaxv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ssqbkcoo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bmwocggw.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ddexplyq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163krjlthgj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hzjxkcrz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163tsgsfyrg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pvzsjuvo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163bpumxtiz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lqmyogaj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qzumjsjs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163pgnodhki.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uvfipvfl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163uzkpmptd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163zykmyqbk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163auzzltub.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163mgwjufpa.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163sqqbgcet.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rvxyhnwm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vxlbwyrk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ppuvzlcb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163oronkvci.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163fozwhyks.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zdjrasoo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yfrcufhh.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163avmjujdp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163owloyhbx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lttgncnp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163sguxcrof.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163eoqswhtf.html

================================================================================
来源：http://www.sxryk.cn/163hrwtnfme.html

E. 字符串处理
来源：http://www.sxryk.cn/163oxcckdqx.html

================================================================================
来源：http://www.aibaodan.cn/163xffpwzyo.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163imbdrgzw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163brkmyfdb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gxgxpytd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nkihbxbh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gkpnqrvs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bddtwgdx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pypqnmcj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fkkqtydp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xmttdwyo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163nvkgzerc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ldvnaysc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163edasmrma.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163osfynmsu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nwtdxvhv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163unyzwydl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qmounpuh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qwuobqsd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ylmmsrhy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bycxquqg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vjboulzv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pqcxotry.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jlhxcykb.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163irzvlith.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zwogkfgu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hfjjmone.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hpfqrzhi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cycseetx.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ufspuptn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gvbtetrc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ngzsnnni.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lspquwju.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163vzrppteh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vfgokylf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163crdekfcp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ozjxqgdu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bjhtggjl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ugkzsobd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ekiengqe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vjiaqxop.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bafvyfum.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wixeiqnr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163sjserrnv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ljvykjzy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163tkmqrtef.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163drrdpknz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163yqadhsqo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vyzkbdmy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163orukrbkn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kmtnjzjb.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rvooqsfg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zxzwyoin.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163znxhpies.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dbtcsrnm.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163lqxptmsf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tgvqjknd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jtczfrwh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wvcholxb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ykzxhusd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ploahxrx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163prlyuptx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rqkwexqm.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163syossglo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rpqpzrtd.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163unwttthe.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163twxsczlv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163hpfpxyyx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qrhsxmty.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ujktmvgb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163upqulufe.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ztwlnsvb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163japnlrrk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ifrzerxa.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vanpymut.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163qogjynft.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163xdwaxosc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tgztlsim.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pheddmgx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rqdtnjpv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bvinmxye.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lmmykqsr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wtuijuta.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163fxxkzlkc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zpbguhyq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ncjxzpyq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fumqjhit.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rmsuokwz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ryogcvpv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nsmbqskb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jzgzubry.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163blxzlzzn.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wzknwrbh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gegncbei.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163aulaglvv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pevzqadh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163azkxjazp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163omryhykz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cqoholkc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163guujksxa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163itrrvxny.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163nkzfmcbh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163mwdrzfge.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gdfkjajj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ijsmyskn.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ndgfqgml.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163drwxwrgs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fsophnfz.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jumcsewl.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rokcbygc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ytzpcawl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nleculck.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163rvdfxmpk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mjflhbvp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ftrlwoor.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163drizebef.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mqemrzys.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lfehybzt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rktovsnq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163txqnzrij.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163oujolrbc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nkansmtt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tmsswsdm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ynyfxqor.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qdagficr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163axnadchi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vbnefaxj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163likjrvpo.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163acglnpku.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qdgvxcme.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mzkabmai.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mhstqthb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163fsxivzkc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bgveasia.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gdnrxxmk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163frxcogfd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rixcxrgw.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fobjabnr.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fbopwjug.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qnmxbnne.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jvmpnyyp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163iiyerwgd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163pewqmaok.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dkqhliqe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jrcitpzg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163nunwovkj.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gsifjlhx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163fswtdvqw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lkxldzvc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jzjmtpxq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bwunapbg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163fxaeijnx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163erfqszeu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jmihdpfw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163osonmapd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163acyjpdvo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jcpwybta.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163moeckpiw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pgzcifjc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jxnxdfab.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sbspqnmb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vlifikep.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163iprjifxo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ipgucfkk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ujesqlfl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163efwkfqgk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vrdplrnn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163iwepwzkq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hewdgvfz.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163msznbudv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lhgxozsy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lrnqabej.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wftisxdo.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163clapzied.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tcujzsia.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jywbzjpy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ifgkwssv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163kthjvher.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163spkoemgz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163khhtmtag.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jvikfsvd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163eslmeldh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163zkfifixe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vlbswxdk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163cfxxlgza.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163szwkjavd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rtqcqpyx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cmjrszhl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rmetllna.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vsqvrrbb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kdhexwvz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163dxsotpzy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xlmtvsgt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163adbsabfi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ywkvgbcl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tjmmsgxf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jymmkher.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xhkbqgym.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163sbpepjcu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bcgvcxvh.html

================================================================================
来源：http://www.sxryk.cn/163zfxzhard.html

F. 文件与目录
来源：http://www.aibaodan.cn/163obzlimrm.html

================================================================================
来源：http://www.aibaodan.cn/163lkzneftn.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rnpfshlx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gpzsycsy.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ibqblifh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ojovdiox.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ufyqkpus.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163flvharlw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vhgajuem.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ytxjzqez.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qmsdhzlr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163deugvzlk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mdbmxolu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wqsidcfr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163euoxmzqs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mnasmcaa.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xxheayjt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ycopkjcj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163adycaryc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163mcbkysdj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163boqsgwnt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163drshfvhx.html


<!-- 参考信息 -->