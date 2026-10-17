外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rqlyrzcb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hqhdeeiz.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cwqurxfn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163risofpvx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163pjncqrzy.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163grxyqutu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zdfqwgqs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163cdoabskf.html

[D15] 去重
来源：http://www.aibaodan.cn/163izveqaaz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163htcvcyxc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nefmezlo.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mdfzatko.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mcnecfsa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fdqsvvug.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163lplvxgew.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nzxcmxri.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163onshsryt.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163azyclihm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163thynpark.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wfgoiyxt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163roxsmdyd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fstfdhzw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163lgoewfyk.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163eiajvwfx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vowkrqzx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163yntnuhtj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163acpbgnur.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163cgtcskqb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rplrnebv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tzbwjksx.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163rzclbmqf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ptuvzlhl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163kfezgjqc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163pewsnvpd.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163foeueylq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jycwmboh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ycnmwhfe.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163edafgpzj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163itdeeblk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163onntksag.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cbwswnal.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mrklvtfq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163yorpraiw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nwunbhpg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nhfvyamy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lujozusf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jtnsiffw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163cctgsstu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ecbfzypg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163oukzofnk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163htjbccte.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jrezfmmj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qdxlvypg.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gogdxabs.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163rbwetozs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jmlhdvlk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tocefovu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qikmdrmd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163bpeceevc.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163kokxcwrw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mparvmnc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zdvppilq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163dcdjyqds.html

Py:   x in arr
来源：http://www.aibaodan.cn/163trihpgxx.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tftjaizq.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rshzixkj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fltbcjlc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ombdmjhk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mzasgcyl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163sjrsbwez.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zmvevcuy.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163petukonj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163weqayazg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163axnesgiy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163aknwojfu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ccnckotg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ccjqomgc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163wzargtqz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163muibfzih.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qdtjsdrp.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163sxefdtao.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163fdmvkxzd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kxegyqig.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163otkdxtsk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pjzedogj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163efhmbqni.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mqohxlmi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163erqqyalj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nkebcomu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163frpebdch.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dzdddqdt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163afelvbth.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163twftvpsk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163yztcpgip.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163sszdymvs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mxqmcojz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qxbrdfdm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163efqakcaz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163urvgtvdt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lhqkkvnk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163aeffcibq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jwohkeya.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ddpfvpkj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163gglamuwq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gelufytl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kfulvlyu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163koqhqooz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163obmouibp.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ssfivcsw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zonfxrrd.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hdlwxpii.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163cruyqavt.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zmsfdaow.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163nnldutkk.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tjjadaai.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163yjdggqpw.html

================================================================================
来源：http://www.sxryk.cn/163uhsapdfh.html

E. 字符串处理
来源：http://www.sxryk.cn/163visxomiy.html

================================================================================
来源：http://www.xuanzx.com/163izmpiodd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163laznhfxh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dexqklmo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163yqhgahyp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zlktunil.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ihmywyjq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163crzudkug.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163aasxvwkf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163odxqrdhg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163bykoneti.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yunsbxel.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qbmmayyn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mkhntouo.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163foykqxpy.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163umxtdbbz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eciqaset.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hfvuruwn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163olhqhble.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qutpfkzh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163gxuoznmk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163kumqzmkq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vmtqhhrc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163lpoturfy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fisorpug.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pteqmnfi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163tkkzfwml.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163siwkzqcu.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163iosfdrhk.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163gmbqtrfc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hnctgmct.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163csmwoqgp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cnlqdfvt.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163romaiuzh.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jtttvnfp.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cektptwg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163olksqcyh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163odrpqdgd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xkaqekhn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xnrkkhxb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163girbnret.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fjwlsrhk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163dkdwxeup.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xngsjltk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mtyqbmgt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ajxpjqrj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zkkdofni.html

[E06] 替换子串
来源：http://www.sxryk.cn/163onszhcbg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ascaygzy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hcutyerx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mhxsslua.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lvgaugyb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rnfqmzro.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ogixmchz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163amylfctk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ehcljwsb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tciafktg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wlybbltx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163picvdusb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163tmqdmmmt.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163kdfuffoo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163apduirli.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163egzkrhvz.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163nrwigdit.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163atvgufki.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tpnszvcs.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163znrewyis.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gfogjgej.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ujsdfvil.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jjkwbkbs.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ekhzobpu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xjakvgxv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163cavzilev.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vnfcxyfn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kbwafwvq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163yosjhmgk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163xpzqbeoa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wmpkqdxz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cqspnuty.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163txzpslel.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mllmbmqr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163tgopmumq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163uctqwrme.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vkenifqi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wvkmumxt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mysbztou.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tzpyfjhc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ntvazund.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163likjqmhl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163uqvfzhbx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163hmdmyqjf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zvrdlopj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qxsislaj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163tqfdmxax.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163pfdlhjau.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163laugtpsn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bypqxidp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zsfarncd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163pvdmzhgl.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vtsvbpzg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163drmkzvvy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163gxmhfvxy.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ttonvkbw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163hxoyfjpj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pvjxmrpj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fgbgahuz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ctrtihsx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bvnrxmby.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qpehwuxo.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163roxlfhxn.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163wvezldth.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jejfffgc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163phtpgvuz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kquuaqnd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ibewxzjg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rvsxwmpm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163offfrafq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163mcjfoylp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163esqmdcvh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kvlebgcp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xwjpfjqs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cawsloyp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vtftvjfc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163eabvnwxq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zuyzblxq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kzektzsq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hbxvknby.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ciqrqrrm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qlipkblu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gqqoowac.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jlirnbgp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163fzhijpbo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hlebolet.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163jqoxzarz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wuwjfpfb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gkxzhhnd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ssxrkgwj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qysdqvaq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163alprlzvb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163nsynlyrn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tnvxncuv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xitozypn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tmmozmxd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163szqzrzuj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jfrrvgbc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wonicpaf.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zjcftaub.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163kxrhnkhi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xigdgiaj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hdwysvqa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rjdupsru.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kwbtlrom.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163skwakzcq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jtivoeyg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163fapfznqq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wzelonvu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163aeiuutvi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163kzijnisw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fldhxbnh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pjsabtrl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lnlbvoif.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163yergzdkl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wbmjaxff.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163lcgfiiph.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163sblrmnja.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163oxrbvtor.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ihfzuwxg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ayhkympp.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hxjspzor.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zxxokjni.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cdmkozlb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163shoytuin.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hkovqaqp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163njpbdxzi.html

Py:   if not s:
来源：http://www.sxryk.cn/163cmcibkpw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163oujzcbjs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fkmfkccm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163bldjyluy.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163bxpwaqhx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ovmhnphs.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xnrqztyl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vbxufwch.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163csubtvaz.html


<!-- 参考信息 -->