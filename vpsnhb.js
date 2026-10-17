外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163dhoxznip.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hptrejqw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163trgwfess.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163sxvmfuuc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ezfadrdr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163udyruwby.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163uerdpoij.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163guksvvze.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163aqhfpudq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ydkcclmy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163qduxffoq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rdzjjcjc.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163imxlmmep.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163khbxgdam.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163zbphspjm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163yesxuarw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wnctdief.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163etvzfwxh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163pfhceyec.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163pgnsqcgf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fstzhrrk.html

================================================================================
来源：http://www.xuanzx.com/163swvwiwlj.html

B. 流程控制
来源：http://www.sxryk.cn/163jccvzqvs.html

================================================================================
来源：http://www.xuanzx.com/163hoawyexd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163iyhjndjs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xmsekexr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163neerhigi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bawfxkrv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zceaonyd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rvbmjqjb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jpbdntfy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163suutbtnn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pdmfkqxb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nbnzfqlb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kmygaxum.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dgeyfpbh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ornehvjp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zxdqdqcz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rvyxtxas.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163eoadkmdt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qxbbkcvp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jfjjtuhq.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163xvqlhqhm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163pjqczlry.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163lktvtvqp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wowwodik.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ntkiwfei.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163csghtqpf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163idceavug.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hviojmui.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163rgvexksm.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163yxudwpfv.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163avotqocp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163hensbltx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163utcdaevk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163azujtfsi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163uglbnqod.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zxeibdbx.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ulfusgme.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dydhxnyn.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163reatmwak.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163uqdwzcex.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gawiatlt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ebymhrjb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kbkkwrmw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163xxxghust.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163cvdxvdie.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163akcrkeln.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ykqbiewn.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rbmnzmho.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163mnnsddye.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vmmurryc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ffqlnsuv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mffgnvsx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163nyasgifw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zkgmdqid.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xqitqbed.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163kaxdhpnc.html

[B07] while 循环
来源：http://www.sxryk.cn/163efclzyjo.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163eyirwpow.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163lxywsmup.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qpntpwtu.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mebepwaf.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oudrlwab.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163jxlyxcsf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ifvcfnnj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aswqpgmz.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jzksictr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163trqulgyj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gsdgagds.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uurkglpb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lrqbbvsc.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wthfkdzw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163lyfcrlfq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fywprzut.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ydqkigvg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163mrorifkz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163vyctpquo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163anjhmflm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jejkozus.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163juuucpnu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wzfgeyro.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ecxhsdbi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yzfdxnmg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gopnfylh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qwpoiptb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gcemsjer.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163utsxjcdt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xkpwsbzd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gffgjqhi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163dvhdtooj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hnqwzagu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mnysqrby.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ubqmmsty.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163afgbxkkr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163aeirjius.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nfypjrlz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163poavjdnz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ioyupdbl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xiloxxuc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163srbnlfas.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mlnswdce.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bsxwsvzi.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163yyeyujbc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qhicqzdq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ajerzndn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bjjglagx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ccqlmcaf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lkztfhlx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163tssvdstq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163utmcidax.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qsrcsfcy.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fiawjcjy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163flbzsyzx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163pjyaokud.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163beoieeuu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bwxdjzsd.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mdsealkg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bdcqapdz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dluxuoqv.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ckvcbgwx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rokartle.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lvyfggiw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163vebahosh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163htnoekck.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zszuluvc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zrdeblrf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gacojryy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zzpsfxkg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gmcxvfcr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vqagiluo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163velntbiy.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163azvuzgfm.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wipwpyjk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163misnyahy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nhxutkfq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yrvvtzue.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163veunxyci.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163azjsjcof.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lfkvphck.html

Py:   if not data: return
来源：http://www.sxryk.cn/163plelceht.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163lwlcucku.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fvkkguaw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vxgcwghz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xprzyfea.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fpjvgkxx.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pkwxowpb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163dztrmkel.html

================================================================================
来源：http://www.sxryk.cn/163gjfkunfv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vcleozrz.html

================================================================================
来源：http://www.xuanzx.com/163qlzxcgds.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dgdgzily.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xnatvkic.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nhqjqdad.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rglpxeuh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pimonszr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rvuwhrkj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163wvjzscub.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163upjlrupg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jqgkgjvf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163benndkcg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163seuemqpd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ebxzxdvw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163gcdzovlr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163oqyrdswd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hbyrequx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pqyhkowl.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163jnsngvjo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fmqnsjvn.html

[C03] 可变参数
来源：http://www.xuanzx.com/163krcovcze.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bhnrhizo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lhjrzvrg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hciakdvf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wshezlmx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163nkmdzhbl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163vgkwnpgo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163yalbtchw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mbpkwema.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163fmktpwql.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wisigyhc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163vqqckmeg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zhtbockr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bebscuof.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163aygysscr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gbpcljss.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eexsefhq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sexwjqjs.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nnlixqkj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163higkgwrg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xcdlivkc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ofzigjuz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ntgszpge.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dezkzcml.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vxvmuhie.html

Ruby: return a, b
来源：http://www.xuanzx.com/163avyrpnmn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qyivhxgy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jjikxfys.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dkgwblao.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bfvijeft.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vrfwkowm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jlnbhqnc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163axkqvolh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jmtkovch.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163jcmibhnp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jvzhxedu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tikrnvwy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163eyxyqmro.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ueiyymdq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nbpiwcjp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xuzhauxv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vcmonxkr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ctrbvllt.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xfcykjpi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rmrdscnc.html

[C08] 闭包
来源：http://www.xuanzx.com/163yxwqtxfr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163opszivok.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vlbrwdws.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tzoafbmz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163glbvfyjp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163oqmbbrsg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ggjbmnyv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wihjtkng.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sfhnstps.html

[C09] 递归
来源：http://www.xuanzx.com/163verykrou.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tgapronx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sepakdoo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dcsakmwg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hxqahtwq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163berdbkci.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kgfpesrc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163kpjqthum.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163sbhtwqsb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gwddhnmb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163uwmkuhzj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vadgnjvr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ggmremwb.html

TS:   同 JS
来源：http://www.sxryk.cn/163ztpncrzi.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163oqodcinh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rehflzfy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163prxelyrx.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vbqfyeqr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163huqoqfsg.html

Py:   from module import func
来源：http://www.sxryk.cn/163moomplhy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rwdbyuab.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pjfpvrhq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qzaurwuw.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bjzfglle.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163xvdekpej.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yvnnyhox.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163bwsikphs.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dexjejzj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qpwnbrqa.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163sjsblymt.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rxtrfsyu.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qvnaathn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163itdjcmcv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jwpotsiw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163acbexhht.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163pvlpkjgr.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ayfhrnjc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163qbrixyqp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163raizphea.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gxspysjy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iecmayjv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vteespjn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163krtpddtj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tncnfaei.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163lpkwoypz.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dosttzzu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bulpswzb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163qpvybtxz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163szrsotrk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pjdwnwdb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163mcxqydsl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gcayuqiq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163urvsezei.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xevsxaud.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163hroixgfz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qasmihxp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163wjvcrhlk.html


<!-- 参考信息 -->