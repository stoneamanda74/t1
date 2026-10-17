外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163dmlnmgxc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qlmgdpvq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163pclfowyv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qvjdlwix.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163lmtxuvkz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163lfgzlfjb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163hofdqqrl.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163geehvlfu.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163lwqoujfu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163kdmbrrqh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hrodpoxr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jrgixgoh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hqgqllty.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163pxzkbhoa.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163oenvkcia.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163cwqbduhr.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163hzyxthzj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163kngcuxqs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163lmbzlcrm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163eenacuzc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163gzinjjdh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163urqbpgku.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kkrvdzqp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163mzdiicqn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163eknsjetv.html

================================================================================
来源：http://www.xuanzx.com/163mbuphfcm.html

B. 流程控制
来源：http://www.sxryk.cn/163djdksxzo.html

================================================================================
来源：http://www.aibaodan.cn/163rljxwymi.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163kseidezy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163twqanxtw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163nyxqqxlq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jdujdprd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163klsszicd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163njvxoonk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163bpmsqhlh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163kpdsfokj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fhfgblnm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163aevdvcps.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163glwxghfo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163qfwufclh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nbzodbps.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qwlsyaly.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vpdqunhc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ifnqspte.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ekiejfzj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mfthtyte.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163wywidgfe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163axkbohzw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163tcrkzlzl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qahcnmiu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gvialhcm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163esxxsmkx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jhovectc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vhwvdmrp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163zngmioyj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163oyklxkna.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qgihtgth.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163acljdscx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163btadwcor.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wamlpjsq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163cfrroaeu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jteoynii.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163mebuqgsk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163btaqvvbr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ujnaaqmf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163iugeqwfm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xjptbgir.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163blqnfvgr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163epprgobr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ypnjaddm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ilhrenaj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163fdzlzccd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163inymvzjd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xgbhrasb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lttexpce.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ypimbiyy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zdwcmkxe.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xcqvlanb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qpajaiiq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163sbyfopdl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163puvsrutu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mucjgovf.html

[B07] while 循环
来源：http://www.xuanzx.com/163acwfuhxd.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qnsxsebp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163drpjnlkz.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lbwdlwmi.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rdyhuenk.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163geawdtxo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163mqdhdhsa.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163urlbmvze.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lesfecks.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163gnmichit.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163iqpfousw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163kxygygpd.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vqpnuxxi.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qwbqkjqt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rfywvpdw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wkwhbzpp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bafvzfuo.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ffgwmwhp.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gdlqjcxu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163czfgtrae.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cpoubjsx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rucfckju.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fotxxvlf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kbyqzpih.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163oufpwvjr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pldqltua.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tmoxaorq.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163uoorpiom.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163gjrrowqg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mvzhgtie.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ieapuctw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dkucwhau.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gdcwbqja.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ihgjigoi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163rvpaqkau.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ojoyhzii.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nvwdzkpy.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163usveslvu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163frifrxtx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tmpopvqg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lqbqqfsa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163iqmfkljw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ujglvesh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163sgbvahge.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tpqfeoma.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hxdqkzml.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163uidncsjv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163fckpekpy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ouhuvpad.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rfnvczmd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cwhpshwz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xzecveno.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wkjyppcr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xwdkklrk.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163cjzgfcpm.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163jwjyexfe.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163fshwjcbr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fwusubes.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163plnyakxg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ygatoghf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163zqgsllgd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vvqqeyeu.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zdvjuytp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ysvkxkrm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mkeatmff.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163urdmxpne.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ydhtwfmy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163omlsqcvq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163cxzppcpe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mmepopzm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163noxuqgru.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163gucpmmgi.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xlyrqzwe.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163maurltkk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163taxyunnk.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fytppcgm.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xbtbszhw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gimhocho.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nrvwbrnk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163kjwrifyl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yxdhowdh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jpalqyua.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vnkuorhj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ukmevsrs.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ujsodpku.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163lqjhredr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163lonakczg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ewcabbkx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ihqpnnsx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163msbprsvd.html

================================================================================
来源：http://www.xuanzx.com/163ceofdrmg.html

C. 函数与作用域
来源：http://www.sxryk.cn/163emnsresu.html

================================================================================
来源：http://www.xuanzx.com/163prroaxca.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bmaucjwm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wfevlxkx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xoaridax.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dnqfepma.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ievgudzh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ybjxvbbw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tketnjxt.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gguqkytp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163depxruyr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rvskleln.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163owamdfbi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kavooope.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cvpvopbo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wzoaudhu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163fhxnutuz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mjyeqqwz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hxflkypk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163sqinebbb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ututwtyo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bwaktrpw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zgcjsjdb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qqydcljg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163avijqkcq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163timtzbxv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163oerddjrt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163odltgmvu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tebdhxba.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qgzmwpcr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163htqcxfxs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163yufeumcb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jqwxmnce.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163wiqcnnmy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163omntcwqv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163sdkzbssl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163epyhysbo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sdzerujk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163eblmqnpk.html

Py:   return a, b
来源：http://www.sxryk.cn/163viavmsuj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yfjgzwlw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163itbrwlyh.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rlecfmkv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zechwpkx.html

Go:   return a, b
来源：http://www.sxryk.cn/163cyvjbusw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ulmxatvf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163oaesgjif.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163regydvqk.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163swuxqbrh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163tkxjzmhw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hnyigbrm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163oqmatddu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hyeizabb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163hmfeqxfs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163rjcmxabp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163rcxructc.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163dpbvfmbd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163aayxbmzi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163snhsvruy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hxgqtxhi.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ybxskgxi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xjsnignk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163lkgbgnpf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163jqaddnpu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dqukyown.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jvkluoir.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ddoyygio.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tewexqdr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163enlztjev.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ituezlry.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163apkcjalp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fizzqpru.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163thnyhzpi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sfhfgjtg.html

[C09] 递归
来源：http://www.aibaodan.cn/163cevsddvu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zolqlokm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cqexyfro.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163piskaamc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qwxxygre.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163zceedicb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pnprazqr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163aqjvlkcy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163cavdexwc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ldplsjja.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163qrngvffj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ypovpfms.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xucqthwx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yclecfar.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163knrotlep.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zmkttsnf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ejbzclyq.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jmuncuxw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163yczpfamm.html

Py:   from module import func
来源：http://www.xuanzx.com/163kuxzhsdd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fdxoabhr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163vudgahgu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xuidisyr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jcoicgme.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mxmrjdpt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nhwyrdnu.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163sljagnoh.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ouqdmazj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163aftsjuxp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lelgqkyt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ktcsnnlc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fxgzmbzo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zauxckri.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rlvzhhfg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bkfdmgnk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163pniuhlhk.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163chhhcleh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163diibmgva.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kuofsncx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163piovamsj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lzyxtbiu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iyhcyjmb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jdhvvxyt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hbfwewfp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vvcbgspc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ifpmmrrz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163eoatddsz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163iblzjcao.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163iqnxuuoq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163uknnjxyj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163kntdwwhh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tlkubmmo.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jbbzuxmg.html


<!-- 参考信息 -->