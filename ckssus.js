外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163gfiwhabj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163xhycqbij.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kpvyrxvd.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uxeitvia.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163eobnlpsj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tnbfzuwr.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vvqyalec.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jmswponp.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163sofjndxu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163badztodt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163voixdavw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wycybhxe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163evqjhzwz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163augmksuz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163plwfmgvb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jcaxgyic.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xtufzigy.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163etcfdpiz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lqiwjilh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163gfknzqra.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163glhzhsdx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bwiuvwdd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qjctgaqs.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gvmllmih.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bpakxpyp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ujrtsgfx.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nsomvvms.html

Py:   x in arr
来源：http://www.sxryk.cn/163ptlcsybl.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163pdgewdgn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163cbgckzct.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zrkvjfyg.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163scrhiddm.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wqtfcdia.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rjuoxsgc.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bersalgq.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zcnwmvws.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mzyyhhle.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163sacqyepk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qcqaodlk.html

TS:   [...arr];
来源：http://www.xuanzx.com/163rlyjctat.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ixklynal.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163emrtgibk.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hvqcuqst.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163mcdfckfp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163xevbcyta.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lurjwxev.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163cpmhkwfr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163canklsyj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uisekezu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vyxpadqv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xttvedyj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163dtqgvtsn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163suoqqtpz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163celudolu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jtrpvenb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qcawnatr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163iscmxekx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vhvfvsui.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zwdjxqyb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vzsnxlba.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tkumlnrm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zgzwpzux.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qwhxpscg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vuiqehyo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163otnuhkdg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jtndtbag.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163uhqiagpa.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163hbsbxycd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163yfmibrwf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wqdpzdbr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163evsfonev.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yqweyqll.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jpttcheh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163kjwdthta.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ewxzhgup.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ceyedbfe.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xgarmhdr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163yrbxeyob.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163oqzwlvkb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yqtkhloo.html

================================================================================
来源：http://www.aibaodan.cn/163toynzciv.html

E. 字符串处理
来源：http://www.xuanzx.com/163kwwmszrl.html

================================================================================
来源：http://www.sxryk.cn/163actvhavp.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163snwzfijl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vweqfjsx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ilvodszo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163saoafygr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163prpmfifn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rlhnemgx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163vibxapnd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163gzhwiqgv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ebvpxduq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qefyklah.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rzvpvfje.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163tgobqqgy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163shaadrlq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163amduvypl.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hrdyzfeu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163cjlcehqa.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pmljewqq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pykvjypd.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163cdchfbhg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dxcpcrxs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163gwvnotxm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163qhmdeklk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163krluvdvv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163zshtgkeq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gtctmhjq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mhobbwau.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163eagbewxb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zfgwnrql.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cmpnebks.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163dxlnbhde.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163yqkommhs.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163riyxuity.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hmfknbmi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wtwabrgc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163wymzvyow.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zrhilxfg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163oycdmglc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163sflmmwmw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vxmbmmnn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163plnmhxoj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rppduqte.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tlmvygau.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vsmjcrxv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163oxfzrjpd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hoqbwwpv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tccandqi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163nfgqzxus.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rfojcuxx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pgaskunc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pygeacrz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dnbkjbqy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ietkiufb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xphiyibe.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ywgziqzc.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dnstfcmq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163krednutb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163csneckvk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zvcarxnf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jbaerxkm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163uvdrlbqk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ptqumqpp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fbnsqpnm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163hsaetpuq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rtpnszju.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gduauizl.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163duzyhjui.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163voglfmvg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fgntcrve.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xbttntwk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kpzqdubv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163avvjmwjf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163bjlhurql.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163oqcesiec.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wsfxfajb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163yrlxwtba.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hfqabgyl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qmgyasry.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163btspewuq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pesxhxhe.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163kwowiobm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163xwndplkk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163yyvyytdj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wuknmzxd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163sgdyakyb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lkftlxrb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gtfqysbg.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163aortmcui.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163plgxujos.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163odsfqxwl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163otzqgcop.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163nwasuqkj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163oyowsngy.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zfqegxzc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lxdjcdtg.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dxqpmtqu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163afbiazgq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163laqncleh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kygqsdax.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163upqxpkuz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ioqhtolr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163iztzhuip.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bkpbbbau.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pgenuyfg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163eiokrioi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163omuippbd.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vlvhvflg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163evzqzhzp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163iieboymc.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163srnghgcz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qhuuhbao.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zjxseslk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163twakpuxe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dhheufcz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163waiuvixk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163schqpuyi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163iycrjelc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cqfghefw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163czknolid.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kajmtmjx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163dzohabtg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163dwfwrxgg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163iealhale.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ylraxcxe.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163liuudqpl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163uoujifto.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xmyvputc.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hpqssnwc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163nzmleihe.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163tqlvglaf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163sittjtck.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ynvmuine.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ajleovcp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163imhbolzd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jdoikhwb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nscrlrbe.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xnsoqono.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kwbyvwlm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163eruphans.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163icihyzti.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163snhaxitk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lidakmnb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163myznsova.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xtqqnmkj.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vnrpvwoy.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zheepiik.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kcobrbjp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zrbqeqdn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dygvtlhz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ofeywrpj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ggkvhyor.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jpcxqbrx.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163utcqvokw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163lgvzhvby.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bdogagrb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163kjsmkyvj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tmtefzbf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lqynqsmp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ashkcclr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ixsepfxd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163slkrdase.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163piutjfnw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163qnwspxyb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163uodapowu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bjucqjrv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163dpgxqiqh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kompdqfc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ttblkdyh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hzlwumuw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rseaamzr.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ogghxwdz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163jpzqyqax.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wbzkpzgt.html

Py:   if not s:
来源：http://www.sxryk.cn/163llxdrtbg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163varhwhmx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hkfjdgfv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xghmqkch.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lcvfkjza.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mtlonejy.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bjbnxnon.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fmafttvs.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ooivmmxh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jcttikym.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kdzqwtye.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pmvvqewp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hvdxijen.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dcukjjgf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163xtxbxfnf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pqarlwjo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hgzqkifw.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163esbanfgi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ffueknxz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mljcrgwb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vvvmdbgi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rsawcwoj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xlzpweoo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163pltdhlnl.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ntokotyh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fepgqxpb.html

================================================================================
来源：http://www.sxryk.cn/163tpuoqovq.html

F. 文件与目录
来源：http://www.xuanzx.com/163lssgzovb.html

================================================================================
来源：http://www.sxryk.cn/163xxhzghgh.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163smsrbhmr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vxwpycnw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mrkvbnfq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hhuabthv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pgqrudfq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yijwexcs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wjqgjkev.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163afgyijjo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163krqdllmx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hircvcra.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163yuqxlcnv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163adpkhmux.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kutprnbd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vdlrvajf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zojqjftt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hkaiiyef.html


<!-- 参考信息 -->