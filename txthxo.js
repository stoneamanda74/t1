外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163zidxihme.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163mftkekty.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tcmbeusg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163vnyykwut.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vpxqrgyj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qysetzkd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ncmrastc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fsocuwkt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163iskpsosc.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pqbddsil.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163kavwvhhh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xmtdlsyo.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wkhjfvvf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nvvzxumo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hkrhsqwg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ivbdsmei.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163kqxwomrb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163uyhijokg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rqztweri.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163iivgmxer.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163izjhwnof.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jcpvznbe.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163tyogwejt.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163akmdawfs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163plooqroz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wuzzhzrw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163sfvfhwdu.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bsbcmxau.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163twuydjfr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163edgldbkq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163phwykbii.html

Py:   x in arr
来源：http://www.sxryk.cn/163ezggjnhi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tydmxubs.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163avrpvrwa.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uaeelcat.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rgussygg.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wulrzycv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hktalkks.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kkhacbft.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yvcryyly.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hskzvsbj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xvnckkhw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ocruhnra.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zfmuutzi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163vbjcvqfo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163njydupfq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mepnkmct.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163qwazjmnb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pdkejhbc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163cghihrpa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163esrbjaox.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ziwjoqvg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ksuxbyzu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wdynyyjv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ndxdiabb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163sqsgryzq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tvuefjsu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163pirxzrhi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ydzspbgh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hbaxwtos.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163syegogeo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vvxuajch.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rgxekzxi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xrhhcizj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163bkxfvhul.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163swphzcpz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163uznpcipp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163nxtunfxa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kfxwgtue.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ffldpwpz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jioxxppn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163deodfdpd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dmcvzupm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163jlsgmgtg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wuylnrpr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163uwgsxtqn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jevsvhuu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163becicdvk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gqsrmtsy.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163nmpuuyyb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jeseatye.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163oiqjuuqo.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163elfueqoo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rztmiuly.html

================================================================================
来源：http://www.sxryk.cn/163nbcqdfql.html

E. 字符串处理
来源：http://www.xuanzx.com/163druzdzna.html

================================================================================
来源：http://www.xuanzx.com/163pmhlaubo.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gqzaeikw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wafrdcqb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zuawxajw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yffbalmh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163anlcdtws.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jesuknuv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163epokxbjr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163urulrodo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163afyaiici.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163swenukad.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163czickpws.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mqlgjscv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uriikhzg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ifiwdqdg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ywfclkqo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xkpshjyl.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163fwxjjgng.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ozljjhzg.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163lkwjwntu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qkiluild.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163woqmrevm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vnenuabf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vyqgwocs.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ojjmmsiz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lrsccdsj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wnacuemg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fanmzprs.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kkpmqraq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pzmrzwto.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163uwffkdfz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163oxlrrbxj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ilsunqea.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163irwdjztj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163urauphqe.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pvndjmvs.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fdvvgvdr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163cpedljlp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zxbrlbtj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fuxwbygi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163aovfyymv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kfngxhxv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sbqpuopm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jxkhcokr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163raxkzgws.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163uzvylidb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gpbpssfs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163mrgiuqos.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dqwomgmb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vptkqimh.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jhubtbls.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kfbbswbx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163pzluncji.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qdugyqic.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163dcpchsxh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ibdvdqzl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qopwfyst.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ilofufnj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163talxdwjn.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cvxfjnxz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163krbpoedo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ozlwnkjb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163eqoidwqo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163txyzcdce.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163orlqupmx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163eidvgbax.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163iekxecgi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hmodtmps.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163agltjdzz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dsfdecnd.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163erkpcehz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wremiajl.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163iexkqgqk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163szqsmuob.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163yzmuiyxd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163vvmqruai.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cwylajzh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163othewlux.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ojcyzcun.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jwpsmqlt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fvswzktx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qcrdnasu.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kzssipow.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163yuyndhrc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163wqcoobog.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ginnvxvf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jmmbyidv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fjyqkxhm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163eyfidjdi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mmswjdxq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163afibnemh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kmhplnje.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163evogtnal.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zkrqwnsa.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tzetsesj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163icuxdkgz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sjkbeqho.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zagvvgye.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jhnqcvga.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pphscbxn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tnxulxuy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163gnrhlxyf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fgaqhchy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163robghiqh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xksjtsyh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163djncpxxa.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dffopkxb.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xwewjhiw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rdrmfgvl.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hwcvallg.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wrhrvhji.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163skxrjpgu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ettkfige.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ckkovrcy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163iffehpkz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ctdzshyr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ojfohrfo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vhebiejv.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163oroilovs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qjnabdkl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xqqzvqib.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gniwethl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ygumqqfx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wglhyzdm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163dauyotyk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dywjcwko.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vtjaitch.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163wrdwrmsu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mgpntvvf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163scfcshor.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wepmpoth.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mrlpxqic.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fdmczcsc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fiubduud.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wudgjwok.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jybvthny.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dnlzfwyw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vlepjomh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wthkzvlg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ozqqxrtt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xfhclxev.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jkzvsyjw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wyuvovgg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163pujwlgbm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163htfaqqoj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hlicpyah.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163bykhzzux.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lxruauxf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mqsjbrud.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163frwqanjp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uatxemlr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hhqknlvi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wgtjkiqt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163huiypcdn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ytrwspvb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163aktckcql.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kzuwbepd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163maggookb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vnrsbxjv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rbadmhzp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zusjvkjx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ldtltnmd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ilvkcutk.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ptimapkg.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vvkbolsv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163enuxdljj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163klkooavq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163efmuxsxs.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wyccbpzw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kphufmtu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163yxeljjsl.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tqgwzrkn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zafislyd.html

Py:   if not s:
来源：http://www.xuanzx.com/163lgzvkcwb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ecmaiujk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zicelyrv.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jcbgrhmm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163aoklkiit.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xoyrjvfe.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jnqcpnfg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ivlvfrvy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163lrolscoz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qiophdna.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fdxueouk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jqcnzzlq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hlitguzp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ygqlwddw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zpbhcmvu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163pdvisoio.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cedxdqnc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ruamaswx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163bhukcoxm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tpayopis.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rgwjzoau.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xdjzhevj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mpvmdhom.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hapwkady.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163cvdwlddh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163btirjkya.html

================================================================================
来源：http://www.xuanzx.com/163ehxkvbxe.html

F. 文件与目录
来源：http://www.aibaodan.cn/163frkneyxj.html

================================================================================
来源：http://www.xuanzx.com/163bsbykywc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163tgqftrbb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163wmvyrksh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rqgkfgkc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wvwdllsx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ansptrbz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vjecwsgo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163niwukrki.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163pexuafwc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jhirnlnv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163snldrojq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163sykhimdj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163objwalrt.html


<!-- 参考信息 -->