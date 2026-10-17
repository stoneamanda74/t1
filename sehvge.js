外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163adstqxai.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163pqjmcgmj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163yvbdjsel.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ejoumqlq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iauebhqm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dhixpxny.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jbbgdkim.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jgcqthgs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163njyttswy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bcxowvjr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nypnbbfi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163tgnzflqg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vntiyido.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jlgasivr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bavejrwc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vlbfvozi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163klqkxrhm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yqckgsrf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zrzwsaoj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163zojindsm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163khwmmddh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dmlxbnbv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163odsvdwcg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163bopcrxhw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163erwrplmo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jvvroazb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ebhzhxdt.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163uxqjywre.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qvymrmez.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163srwuqdpe.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163mqzrbvoi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qxpceccy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gyjsipsv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163xfriszhy.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163rnqphwyi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ndtzeyse.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163cxjpwdwk.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163wwmswojm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lhhhzhpp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163iygfmlwi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163deekvbno.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163grruxpom.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163jjjryusq.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163uvwwnxxx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pjzvxfcg.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xxuedsof.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jiltofla.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vzlzkehj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yvlqxhlj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mwqwjgts.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ibwwxila.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ijworhvl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163sstcqroo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163tvjlnvsa.html

[B07] while 循环
来源：http://www.aibaodan.cn/163dqyjdtcb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ovqiwlyi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lnzrjmmt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lpouaktk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bkarlmas.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jxdqtstp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kxchkvfy.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163llashrrm.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nwqoptoh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163tkvnrrgr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163liyjzezq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ndlxceyj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163esfwzuhw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ouklbysq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pizbvyrx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kqzwxivw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163rpekupho.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xsqaabfp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ehwlyrpi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163libnqdtc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kobujnje.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eohsoyns.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163buajgwgn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163strwynxj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163bgvaiicx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163rjkmhatw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jocflvnw.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hnfalpyv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qbolfaot.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wtknhnqz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163tqqdxvyi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zwonjvof.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zjexxsmb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163uppjragm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tmgjznvc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ttxfbgui.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163bqvlypjw.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163byuxbxtu.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bnadytqr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kcfxidhg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163issxnnrz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rjmprbso.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kuerxpqa.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rrnvndlf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163uzdhdegt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gcxkcnja.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aaqqoxih.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163oqgpwazp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mqebpkhf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163knwupdjv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163aiqcfzsv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163hpfpqrcy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163smgvyrzs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163txljidow.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163scaygxbk.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ramaikeh.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wthvxkgr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ukinebet.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vlfesyzp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zzmfopyg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mvlimsvn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jimfmscq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163memenzra.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163jhpucuwq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fccfrfpf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163siexhlup.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163plkbjwyz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163efqyxeyi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cajnlisf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ohdlxlpk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163wcpmrepp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gnbtlxee.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lucozqed.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163llkvhlcy.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163fnoznnvk.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163zkohtush.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zjalhkxf.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163eiwjqyje.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163axhozyyd.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ujmitjzf.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163cebeojyb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sgcwbpxb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163cupdepzs.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163iexxpvrm.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hjmmpsgp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163dbpblavw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163txebuqxk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gtassbxi.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163crolicig.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163sdjcqdxb.html

================================================================================
来源：http://www.aibaodan.cn/163nvfipzmf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163pchkdpeu.html

================================================================================
来源：http://www.sxryk.cn/163rkttbiew.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163zaxsrrre.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vjjfnjqy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dmiolyye.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vrqceqzf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yryvfjmo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cwqiyfdd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vxqlycij.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163mikobekw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gfmcqhkq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nyluzajp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163swyfznen.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dxkqcitr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vjuvlsyy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tqumaquk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163svhkhiqz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zqfaykqp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163awkyfrjx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jakskqbu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kxuctzht.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ibgibdaw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jvtmbstn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163epmnxajb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nrrptqub.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zmijqfrr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163bvxkixyu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163giksiado.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zvpxxsfk.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qapmkqhe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kxktahyt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mxoepydm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yypnqtiw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ngvuiwhu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163goqrvdrk.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163elzuxcsx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vielcpwg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ouojrikb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lukyfmgo.html

Py:   return a, b
来源：http://www.aibaodan.cn/163disxdxbx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163yelvfotj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163keqiqnpp.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163wnxrnnfz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jkwbrbst.html

Go:   return a, b
来源：http://www.sxryk.cn/163rjdfaqud.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lgwghkqr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163pmcqcfsg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163sogaiyit.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qzfckchj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163qtelzhhl.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jnkeqfnb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163mimbixdq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163cqizzjyf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jnjbqrox.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ufqxpzdd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kdeppiaa.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ivwlzmfj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163agyhljzz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cdyrbvcz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mzyovnmn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mknzexbl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ksegwttb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pfrlrhyg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163yocidmfg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wmzeuumu.html

[C08] 闭包
来源：http://www.xuanzx.com/163wvewiltr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163yxyzayyh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163lxqqblvj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zidzsgaa.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163whnpcnjf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163meuxdaqe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163jpjvaugg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163kmzdmskx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163shtauatq.html

[C09] 递归
来源：http://www.xuanzx.com/163dvxdkbep.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nfklmiry.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163isaxfkhn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fhecydax.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fmdpqemk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mmkkiiek.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nujsibmi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163yfeaxxwd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163akfszpff.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tkrwwnbk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wgjfhjfi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yrgyvuat.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163hlninqkp.html

TS:   同 JS
来源：http://www.xuanzx.com/163umczbbsv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rtkqnwcd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bmobnvdc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163djrzjwrt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163kvmvtbhr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163eluxnckh.html

Py:   from module import func
来源：http://www.sxryk.cn/163xuwjnfal.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163idbavwmo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hpapsrbr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mcfblcnw.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163shfvkuth.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163lxsitiei.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zeptwqxt.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163znlvyiga.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163izysqykk.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163izcnyxrs.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cdzumzvs.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bmrhqtye.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lxmxfpbx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xwvktwff.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ysushglx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ypvrunme.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xiqqsijo.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vqjknqnl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163isdntqnh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fixcnujs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tbmkrbnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bzaapwpe.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bkdnpdwy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bdgiqyuu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163hwjtfhji.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163llgewxit.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gjfrzvuo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cddlmmkt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bgxilddt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163sanajpeu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163slcnbxdy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163agpfmovf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ihmhxmvs.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163dqxxkdyn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rcxjjhhv.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gsfmysej.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nxoicmix.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kxbnvnvo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nynnfbxc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163uovqrdwt.html

Java: // 无解构
来源：http://www.sxryk.cn/163bxyxhuqf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163qbybapoq.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qanltmaz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wybjqtrh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nsnytwmr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fgqxrpwk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163cufcrmna.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tysggrlr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163eqbaqmui.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163joqtvbmh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163mdibbgky.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hatgicnx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163bjkqhudd.html

================================================================================
来源：http://www.aibaodan.cn/163rgmverog.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163fbucnksg.html

================================================================================
来源：http://www.aibaodan.cn/163fuzldyww.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163pweduqca.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qilclpbx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163grejqzkw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163gtjdfwba.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jcorqblz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lclucbuq.html


<!-- 参考信息 -->