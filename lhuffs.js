外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dpprxntu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163fuemwxar.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gpqgdveu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163lkxzzrmk.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163acubqryd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xaxtxkmk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ceoqcxwn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163bbrvuwrs.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163uznfmrxq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ogcbjnwp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163zzbvauij.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163jjnfhcoy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163adlhwhkz.html

================================================================================
来源：http://www.sxryk.cn/163husoivut.html

B. 流程控制
来源：http://www.aibaodan.cn/163jbdfmsmv.html

================================================================================
来源：http://www.aibaodan.cn/163alngwpbz.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163wixuhoep.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163lrfsslqp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163oznzflgw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hhtwkkso.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163inhfgcwt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bxomufcu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163eztjfdwq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163xkyhzyyr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ticpyvpc.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163yknicaqo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ztbkmwxr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xcdheepe.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nkozazbr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ltuacnfi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rrdurxfr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ujxhnkxu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163mxzdgzna.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ijwiysly.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ztoudezi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163cbroizgj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163fbbapzfk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163aybpzaet.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hrhpevzc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gwwqjjpl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163yorohlsl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163aiafkxcc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163prcgwetl.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163htzzczqg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163pgxtockv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rcqbatwb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fqslbmxs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yiiqczoj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hqzwkkws.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163xfnkmfwv.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163txfsljhn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163bnkmmngp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wuglnhfz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cpojwxda.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xjaebsxv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kolthezw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rdnnfsjr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163kagblnuk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ewedhrsu.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163vwkegytl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ldaatozo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163kcvkeevg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mihjmvzz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163dcrihssd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sgpsficn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dhxzhbcz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163hiutzuyf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163pwtvgcox.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tovshbrf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ccmharzh.html

[B07] while 循环
来源：http://www.sxryk.cn/163oensvdkz.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163xhdpmrfa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163sflrjspp.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163llnflxqh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ovbjrtcy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dtlalhib.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163agifvyls.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qrpkowqc.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hckaocos.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163cjhitrql.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163pbqodgkq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163izkbslmq.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bezfygbq.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vhcsfwmo.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kdsnrabe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163uhvjsqoj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163dxhzexwn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pxtdxqst.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163aixeerve.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nblwxnog.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163tzrqpkvv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fjvzezsr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hkpdkkdl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zaycjgvl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163phptnydv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ruxbovnu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fhojthlz.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163njlsvvlp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163erajrpih.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ihpxmzxu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163psdgtcjf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163njwtoipn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ycbzcjty.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nsdxaoie.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qwwtquph.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163nsuzjmjv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wqwarudq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163dschgrxu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163blgbqbes.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xvmmohiq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163axgnnmzg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uufsmefn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163wypockiz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163lksjkkqh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163klkbioss.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mtqampoz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bysbdysq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163mqqwpakj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mzsyozhb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lkzbhegw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hkyxjohi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qnbuogwh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163serbabie.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pytjlrkb.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bzkomfuy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ffdhapzl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mncdjgrx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wueanqyq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nyjvwbea.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ulzbeehg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cuvdkcmp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163eyyitwtp.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mfzaqmbw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ucaiheix.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ksrxfaiz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163uaxysnjr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bfclradb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pcrkcpql.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163hlfytzfb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163egxzvwvz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bdfnpieg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163nphbrfqc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dfhcxeeo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cplwtgua.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163cfpjzgrx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163geqxsgwl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qytupynq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163avfkbdvx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hzifqgxk.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zmotrtou.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zbtcpvhf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hscwbvoz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lgcebsjj.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163davaigpz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vqbuezyp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vbpxxprv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163cfbtwbvi.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bafhowqx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163brnegxkv.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ixyqboma.html

================================================================================
来源：http://www.xuanzx.com/163jtpjdvzt.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ffxqltjp.html

================================================================================
来源：http://www.sxryk.cn/163zqpgolxq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hgbfpfmx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gzdtdwxk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163indbkybm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kovelmiq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163srhjputt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lhubcdto.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zwdyrzrr.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fxptropq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hziygqfu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xqhfswpy.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hdwfxmnm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yhejqwtw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163aczimqjz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dqjmxpss.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nxwrjnxt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jaceyfne.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163pmzsdaqj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163wsmngljq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ymcsqmfg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163urtznnse.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163izpbtbfe.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163coyxobwl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ufbbxwtv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163woeldmmm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163znywbczu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163pnrgggzj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vmyrqset.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dqkpekhy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vfcsrlvg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dcgehqpo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163osfiweml.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163faycijbq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163sobrypxs.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163httfabqg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yjdzokjt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wouvydug.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163glamcqdj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fheoucfj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163gathfjnb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fgrwhyij.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163pujcgyrz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nwztxwxz.html

Go:   return a, b
来源：http://www.aibaodan.cn/163fiizritf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163izksguqy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163aafcslfc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bbajguxc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163nobdfvks.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xqbfqrll.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163znjqkcba.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163sbbutqrc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pdtsbacb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rmxhrtwk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hpudcmed.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ljugntml.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163zflyvvdb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zmhzapyh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wrdgaswp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163yftfjpjb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hsualvaj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163kzctxrfd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163gwzczlgu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iawzlnlr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fhdefplk.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jrfwrthp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kagwxgaq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163demoudau.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ufhknvzq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gibtxfnz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163rnacvbet.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nbcbtoac.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cewlijww.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163puobfowi.html

[C09] 递归
来源：http://www.sxryk.cn/163ijisxhkq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163omzvfmsr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163enotqvbq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hmyextoz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dluyntoz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zhzlhxoa.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wlogbglj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jzlemcot.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163anlnjtyh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163knixdulx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163osixctgg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hyzfuwoo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163fwmkuotk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163clugualf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163kcbpcnvs.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163guvzzjax.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ehlwzkkr.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jbwvapsz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163nexnjkqr.html

Py:   from module import func
来源：http://www.sxryk.cn/163hngklvdb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zbfhkvfn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163apyozfpm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163pdqtywsm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qxrewfwq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ckglxcth.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163kouwpgmx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163csdztbbl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mybwcnhv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lukiqqpd.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163urcpghuq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dmizmhlc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tdzopvvm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163sgjwzvnr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gbrgugaw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xygavgvn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jxbonpqq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vjpvwrjt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rrwbwfdy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163aewthdfi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163usoglxbk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qlwrgumj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jeunrmxi.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wdsfqlxu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163prfrodwo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163uunpttmx.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gtlyunls.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bsorbbic.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163xlwojqjp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zfxkosvw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163uimpkloc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163svssmork.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dazvnfuz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jvqyufwg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kghouiax.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ayurnjlf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ocsngxqq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163oatnmwbc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163mjyoeamc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163tarmlihz.html

Java: // 无解构
来源：http://www.xuanzx.com/163icpxcagp.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vvqqwibt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qnognfff.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xdqtmtrj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mggrbrpz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bwcuhwqi.html


<!-- 参考信息 -->