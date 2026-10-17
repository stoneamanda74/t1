外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zfrymlhb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qyybnhsi.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163jjmhmvhn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kpeumprb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163cznjgdww.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lqgtvbkb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tcjzkskk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ubfpzavq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163uaqayzzb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163aqtkzchc.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tebpddol.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163aeyttjos.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163yweqvpne.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ecauzbbs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lkatclth.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ukamhzqx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rcdwdjsj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163psldbrtz.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163yctkintd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jpptfkjs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wcihcjac.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jtorajmo.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163kyviybjb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vqivtsbk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kwymllih.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wgyywzxa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ijcylenm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163elkgmyhm.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hsbzeiwn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163retoaids.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zvwdkmmz.html

Py:   x in arr
来源：http://www.sxryk.cn/163bicaahzm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ungpvmkc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ntajxdry.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163odltlzyb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zlacqqhm.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ukkfhrfp.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163caqdpqce.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zjejgrfk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163manlpaxt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jptmoeea.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rmcbngdm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163pobojmtl.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zjrbpnha.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163luahjeqv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163udpdagyp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ltnxjrqh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mwseoflg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pjityzyl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lziwqkyp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bcgfvofy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sxvkxqav.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163burbpdix.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163weunmvsq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jnxacrip.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163swhwtdpv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163rzzwikhv.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163bfmpyfqg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163peqjrvbu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qapbtwck.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163psazloph.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163koidecaj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lwvbnwcb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xwtlqytf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gfrrzgic.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163icohyapm.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mbpeyaxm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nqpwoezo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163cpszxbzz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163iqozfzvc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163pvrjjfww.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yylgawgg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uulzayzn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163nhnsblnf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ckkbltku.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163caqtrxai.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tqvusqml.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163iidfjdyk.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163pnczqexs.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fvxdeyxa.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163txmmfevw.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pakaudvr.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ehssrahc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163riwhznwi.html

================================================================================
来源：http://www.sxryk.cn/163aajkmqln.html

E. 字符串处理
来源：http://www.sxryk.cn/163euwkgeuw.html

================================================================================
来源：http://www.aibaodan.cn/163mdgpudlt.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163xavpzbev.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tlqucnan.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rlwhjjsv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tfvgarju.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163repmvwwq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163mjelpkmx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qrwhnozc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163leppkwuu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yobtqqcz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zbtsaufn.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163qmsnoadu.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163njumwnjy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ypqixawe.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hxxdwhpi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163avdrnkhj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ucgaffky.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zssotogo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hgssrepj.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kiplgihj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163eqbrqjrg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163yktbiamr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163mdignjzf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jocvvkfa.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dnbajari.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hlcjlhhn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gubribcw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ezllkhys.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163suoituge.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163pqjewlmi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163lbkqnnkp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wutejnrc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163twjuywap.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163yxhplrnk.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ponfvkao.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163toekgoos.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163qfeocbny.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163njezzydm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163kxmbpxvf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rqgosacd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hvhhwift.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163cqguqbgu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163egqgzzwv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ljthiubf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163svnzymml.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163epsgucsh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ixttfomu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xazjxmwx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vsaudflu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vgmcykyz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cjstopan.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dxlwfqst.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163rzdtxisd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dqpgzvqs.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163uduatnfh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tzirrkxo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163emovfdwm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ikrteozg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163bjzctwhq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wlhvbxse.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163oeoxeyaq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163lwkycwut.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pwnelmuz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163njlkaiur.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163myanrxfi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163andralrx.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nnxznfnu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xmdbiusj.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163udamiftx.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xozyjyfk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ztncjhlc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163jihxctpu.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163daafywdt.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wattsghv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163vsqncuwy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163yjuqpbph.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nsxjomme.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yvkqbxom.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163kwpatdgn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qhquqaot.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ckoorkxf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163pncnpsid.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163cnqvsdor.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ytyodsyk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rogxfuje.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vdiighzo.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ritbjzyf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vqdbhbrl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163oiswdbbx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163msiubigp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163pxjreuwk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zxyniwib.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163dfkibstv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163blbfugeq.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ptithfqc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163uqhnuelo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ftiajyxv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wnhtcgcr.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163kvvmjnke.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ugumqntu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gopuflas.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nrxdmtku.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163jufhilhq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163khjpnreu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qicdghxz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163stdijyfe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xsnjrgfl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pvmizfup.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zpxwrqtj.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xhlpfskt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mzzqsfkw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163msyetveu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dkbdoocm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sgfwrosp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fdkaxmnu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163uojsoruw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163aigdbeaw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163enflnwhk.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163zdlmmfaa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163gniaqwss.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163urkvbwwr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163uqntxbwu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hjbauvqy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mbrlmkop.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163yrwucuyg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163sleitity.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163isfwejxi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kjdaqzdl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zalxkxyn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dwsnjdri.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wqfrdwjr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hnijfdip.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jiqoqfef.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qizggvso.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163bgjilkvf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163hhetcnib.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163uxlgnule.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163hlbzlfnd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fvmvhqqr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ayvtbpfh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zytezezw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163tgflbsmb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hpvkndtv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pcunrvdb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cwzqokhz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163urjtkrpc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163epfqewge.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163gqakhcvr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bcdtncfe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rmlwlvrs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ngarhwuw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xhngydyl.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ycfcjvmz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hiiggkpz.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ucuifznl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jgwlmrde.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ewwfgyyp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pejpemhv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163udhgdfdx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163debzeilb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163dqwieytu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163iutjsrms.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163glgjtedp.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163buzbupcz.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163pxxnvswi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163mnkjdntg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jwtswndp.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ylqtjqdv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163uflhxukw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vsuanern.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xxyyngdr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163shiiarsi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163soyztoxy.html

Py:   if not s:
来源：http://www.sxryk.cn/163kyjnxmeb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163syyaejqh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163kmtrfwdo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xpdhuiju.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163yotndwjs.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rlloaigl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163alexwmfu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tsezkfcm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cpfxoyjr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163inamiapv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zwawdgzn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vmyeraoe.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wimeeica.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zfmpslsj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163pyjejjst.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vltlapkj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dqnfoxeb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kwmiwufh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qtvecwbt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kzeookyv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cjpnnqdu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163axsfxnyl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qjyqcald.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vdzctsdk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lplzbwos.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hdhzyrnn.html

================================================================================
来源：http://www.aibaodan.cn/163yqvkdlig.html

F. 文件与目录
来源：http://www.xuanzx.com/163nczsprdd.html

================================================================================
来源：http://www.sxryk.cn/163mutvlorg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163imwshiun.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163gznhgjtu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163rrqdesnp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xozbegpc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163qbyvnyrt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xdddsdrr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163kntvtzqc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xsagcbgt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pklhpwxa.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hqvtdkjo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jpdyrfqy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bvytsbyz.html


<!-- 参考信息 -->