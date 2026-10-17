外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163scwidiil.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163unoifapq.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163aojzykul.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tjczqcom.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163pfhvjtpe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163pjkyqewa.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163dfzjpjwr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xbariuzl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163neuweelw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163uadlqdvi.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vyaojdqo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163monfybrn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ldwmsnvu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qiajfxkr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163cqjhsxsc.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hogmjtzb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cqpllpms.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163syitlors.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mbzchwtb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xqwixjqw.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163amibtpdd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163frvcuvgw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163fgsqogzs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163abpwkbnw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jkqwluyu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163uqlrgxgb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hworlzxp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hwimdyrz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mdthzmhe.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ypdydsjr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163gevfvumg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163utlsbqay.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uozvzdye.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gxeburxv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163anaodzle.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pzzbgfxo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kwaoopdw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rwvxzqux.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tquzamrp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nmwmvaty.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hjzbpojd.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hbapohlg.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sakpvdsh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163jtkwjpwy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gjvazbwq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nklnbuql.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163uhuiuzdm.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163thtctpqa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jblifpeu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163shgjqrjr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163rpobrmwk.html

TS:   [...arr];
来源：http://www.xuanzx.com/163cmuxtjzo.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ojjziffj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ahrzgzqg.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163coksyjqs.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hkfsifdq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163dcvwlnrr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gbqjxwie.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163iwuhwgob.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ahrkxosy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ghbklofv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163iarfnpry.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mqhyswxc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163horyrbvn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163txppspjs.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wwvoydur.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163gmznizuj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ocgsfwcv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ckqiautq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163djsvrgjf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dtdlckrz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163smxhifqb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163kuawffro.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163zpssaoyy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bgpehfbq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qohxnzpc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163opyjttnn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163emvpisnm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163hekcnxph.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qumnwqhv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tdkkfxtf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163tqspfxdf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163fwoglpwp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lwgcmzoj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zqpfpwzk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163firynzxl.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fgyaispa.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163rsaynynb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vbkccwce.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ntvnzqty.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163afjvoqmc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163odbqczdy.html

================================================================================
来源：http://www.aibaodan.cn/163puyquhcy.html

E. 字符串处理
来源：http://www.sxryk.cn/163ocxzhbcw.html

================================================================================
来源：http://www.sxryk.cn/163boklsjql.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xddxzaog.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163decajnbl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hjtlnrux.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wlrmhawl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hhyotetg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gowxagiy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163vitarhbn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163duoqzqyo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163osllgrfo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163onkellbp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vjfzzsqp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gxmyqlys.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nqsqlbmy.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uwqvkipq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163phcdydeh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163romefcil.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163nielpodt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163iuvvenud.html

[E03] 截取子串
来源：http://www.xuanzx.com/163llbvxjku.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tlurcygh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hiejqqoy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zsumbhvt.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163zvilvzuy.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zuchjerj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163bslqoqis.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gcjvvvhj.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rplsaiku.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163bwhlvqmg.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jjiknbcx.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163wnhoojbg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dgniuhyy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163gdcijytd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163obkninse.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163fficdagn.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tndwozts.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bvwdvrbf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163eruidtds.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ztgozoba.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163djewduxc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gyojiszn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163edpiptkj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dxdcdhfq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vfdhvlty.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xfwpanfq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163dibqijwi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ftvpgnuh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163jpvjtkyv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xhwsknzk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163minyndrb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163unkngxez.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qiisagnl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uepbewvf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wwrtampv.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163avouexyr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163atejnpyo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163blffcmkd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163czfuyooy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bvwsrowu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163vajmnpap.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ymfkjnuq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mvebzrtt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uookgldo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163icywlceu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163iazsuipa.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ursanapu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163rfbwbpwj.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163xlzsfpks.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fwslelhz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163yxvpmsrk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163owithwsy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163pfxxoofx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qmwvhpzq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vnecxqux.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zvgvflqy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ootcrqxf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163listhtqn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ieaxvcck.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163udkkmevc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163dansfavh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163shnmhvsu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zfszpreb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dnglwfgh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163edgvnvct.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163inxrycdz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hubmboun.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kwwuhhvp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163uqbkjeyf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jlmrexqc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wlbdncvl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mrmbltwk.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ukqvmfaj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yitrzfgh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tvohslig.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jzjqvutx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163choyjind.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163awterlmp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xualxxmu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kkxuazkb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lwkjxkui.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163drulvpwb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kxbrxxqe.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kqbflool.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zymcnayt.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uhgxnjlk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bshmtztq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163epkfutkr.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ebepvbch.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163yptnevct.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vetaslat.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163icvogafw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163heuhapau.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tqznfmsj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163czsobnid.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ypjycszq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xympeclh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wbbtgfvd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163yzevhqji.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163prdgmtfr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163xtlaaadg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nemijrjv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163sfsguzrz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163pgvgrhlw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pgjjhkit.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vuwgpogg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163koojlxbz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163prftmrpi.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163iryqgubg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ytbcdrzh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fwlnunfl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zeawjwty.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kytbhqge.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vkbfeqox.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ydobihuu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jrvvphtb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jdfqpnxv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xoqnoiag.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163vwjpaved.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zanthykd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jdtielwf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163quahwtam.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ebceftkf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ggpizysb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wamfuksj.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yyjazwas.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dqwxafvf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pfbpefwi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163exgmbpvs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163etmpcwxw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dsfiluxy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163eldkdgla.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qryabbpx.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163yyqaurrf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163vzjcurkc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rkvfehej.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mbasoyyn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163gokdfmxe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163negmgwzh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163upxbepvy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163upjpnett.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163dwesilhb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jrtypnwh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163pvbbgedh.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yydvoeqz.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xpztzrpo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qawwpyxb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mimvrejb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dphphhyv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163iedeitgy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163aljuzcto.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163wrasbblh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163koroahfn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vtjdpqgw.html

Py:   if not s:
来源：http://www.sxryk.cn/163qfjlpwnj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dlzgfgmv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jlwljiya.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163sykpfcse.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hbyznvgj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cdnwamkw.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163uhmsepez.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qbhejoau.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163eavlnzpj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hnckmlyv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163sedylwph.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ljjbcmlg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nlfpuekh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163slfiklvr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qpicwnpo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ojmqtyaz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xxqwzpzr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bjeusqoy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ehobhyjk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ioxqagzt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163usalydpf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ermcbwax.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mzgqinvr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fnmvzbey.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163aiivxosb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163schovslf.html

================================================================================
来源：http://www.aibaodan.cn/163jwdjwfsj.html

F. 文件与目录
来源：http://www.sxryk.cn/163uudbbsar.html

================================================================================
来源：http://www.sxryk.cn/163goopikeo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163snsubxly.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jsxubqgz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163nmwvvwsr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rtogkush.html


<!-- 参考信息 -->