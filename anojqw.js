外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163oftskgrg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163lbpqndxk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163wcowgwic.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163abgejwkx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163okxvwgjq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eucklxvx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163jzuskfex.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rjtgjsea.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cqirudds.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163fmzccrcr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lmkenyzn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ixdiczxa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vsvwtzee.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dnmutwnu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dbnowhuc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163lyswticf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zdxhrbrf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163djlvbnyi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qomzafnx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tmwjekip.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vbokmxpb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oschfmgt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163cokqpwcn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163acblvsei.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163yrfimruq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ieyppojp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163edtibdeg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163nlqunzyh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163tuooufde.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wbolnbwb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bdcsipvx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ouadeyak.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163sngzdwvj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163dcifxsek.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163apbzmvab.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163clssbjva.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rvurjmdm.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163zpgpvhko.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kisnegdf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lehoidwl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lwdxjzfh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ossghkgq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163swndqtcp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rthbefne.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163jyennvnh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163eyetnkzs.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ipkrbupd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163fuxepxew.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nzazrbgr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ibzkjxrz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gmqpxiun.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ovlaanfd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163agplsket.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vqzjqgau.html

[B07] while 循环
来源：http://www.sxryk.cn/163axnbmdfz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fehuscky.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qamstfwi.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mnneplvq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163auhxbidw.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tfrpbszy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163asbiiymd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gfquhlvh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163itcqpovd.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163lvlbhxmq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hwrhuwqf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wtwsnkql.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bawijszn.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ersyyqal.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gtsfeyhu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ghrlmipf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cijhzoha.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pvlaumps.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hftfcjlv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ytgrkrqp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163veqeaigj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yyiwstuy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vrnmxafc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bvafbvkc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163udmgoghu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163rrrfkmry.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cahbjxex.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xjaojfle.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pdkvziqx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163szkykmig.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hrfvaqxr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163diuguptp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hcndhkwj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163yjtkuyxm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bstpgdvf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163atyrbais.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fshlufao.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kdzfdmyj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163wqiqridh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163peewwvpw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163creknide.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163npcfzaly.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xnhffsim.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163mblxweax.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pyuzyvxv.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163dsdfcubr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cnvvlney.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jsxsyfss.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163axahwvbh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vowekkfw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zckqzjdl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163acyncwmr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163raxozwjt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163cceufgku.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163fvdfuaif.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163anvufzzk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163igswnnmv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163iurilmug.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cgsgeovc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ivoyztdk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163paugtaiw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jegnanbx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163owlvrskm.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163sjoplreh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fuecdajy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fuyvoapk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163roamloin.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hbparocv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zgqwzmhn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163guvaqrdx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163wgowlkrm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hkhigfjw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tgzvggdp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zztksmau.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qntfryed.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163tpkjnyza.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163kfbxrtyn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tokwwobv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163hhagdzdg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163awmpajtz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yuulnmea.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vcwgpsyz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lxmjuyqs.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163tqutkrrt.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ubusocux.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163azspqwvp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gkkiuezd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vnhhjqvb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ivqevpil.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mtcszwyq.html

================================================================================
来源：http://www.sxryk.cn/163znqlpuyb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xjijqpqf.html

================================================================================
来源：http://www.aibaodan.cn/163zxmackve.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hovxhvjj.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fckqnqii.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wlyaloae.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163znuxmzjo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yevvadht.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tnktptfw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163dubqhrpr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tkbnvkkh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gcatuldj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163zzeuzodl.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163arzvubio.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hfhdddnc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tqbhudha.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ostsxyta.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mcmycqst.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ainslpxb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163baozktbt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163hczrgcbj.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kytoysxs.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ceictzni.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lfwybjpa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pxjofyid.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hzhpzpqh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163szsiexmr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163tfaubzbh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163pphzqnzl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163cewktgya.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163awryzwvj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163gjtlpvbu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wemvohay.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163pnwlwupb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163urnblysy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gmjfjppv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163iyhstjch.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xmbgsius.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163utytaukr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kimtgjas.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ocrygmbk.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gxeirjmi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163uafrmqoy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163dvqxmnpe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rihzsbrk.html

Go:   return a, b
来源：http://www.xuanzx.com/163qwqlygir.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bgolqsqm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jubjmwub.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163mromnesj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rrjvgyux.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ngcltubg.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163xxkznrqb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qxqjtouf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163zambjcgd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vzftebse.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163adfwrjti.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163peimpdns.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ufnxevyr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ibevsugd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qsonpgqb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163psemyrgq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163shgyrbrs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163bodjtzpc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vvpctovs.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ckrfjutc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163petxxosg.html

[C08] 闭包
来源：http://www.sxryk.cn/163tibonpyk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fwuqofno.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163uqaeertb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mcivwnrk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bhstyckn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163avrsxvzi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zjlizunl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163opoqnsiu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tqbxhiub.html

[C09] 递归
来源：http://www.aibaodan.cn/163yniwpmhu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qjaaghoi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bjvgotvl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163luofsnrq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vbnifmbx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163clasnrsk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lirpsxoq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fbwqhunr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ghmifxmo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163lcdzgrch.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xqwvvodj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hzsezgyn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ugilfswo.html

TS:   同 JS
来源：http://www.aibaodan.cn/163viteqsrx.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tzxszekc.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163afdxeeyz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163xrpmhfom.html

C#:   块级作用域
来源：http://www.sxryk.cn/163hcmsalgm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163aavgcyte.html

Py:   from module import func
来源：http://www.sxryk.cn/163qfdotbqh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zngihgax.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163snnrdjis.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gtgnenxc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163njnrutyw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163nmfgxous.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hboeceag.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163tgvkebyr.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zmkeovey.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163eqipredn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qeacuofs.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mrybnfdp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hrqvspvb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163kvnvhcse.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ajbvstmh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tisqyklv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tvznxiav.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kwnkjojg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163uojnjrqh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zprlcdgl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ylpayyan.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163buqhzfuo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vcxjkhty.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ndjbtqmj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mnyxovht.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ptuhdxmx.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163appegwyx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hrmgmxrg.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jwjjbzaw.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163syqsjiwk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163baockabk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ztjbjrtx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163afnmpfak.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163njscjscz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ctblhnve.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163soafqvce.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bdihectj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163tfzhuhho.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hawwzmjv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163dnlisrii.html

Java: // 无解构
来源：http://www.xuanzx.com/163xqewrthy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ikizlbvd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163likqhura.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ixplfgfl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163rebyiljf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163knpbzbyn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ejnxyzzw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jzdsydjl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zfbwxzqi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163etpigftv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bggoshwn.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pfbyckts.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163mirimhac.html

================================================================================
来源：http://www.aibaodan.cn/163joniagjr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163zijdhfiq.html

================================================================================
来源：http://www.aibaodan.cn/163dpqztjvo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163nflodltd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163icsoyrvh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163hzqqurgb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163eznqjblf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rnzigrac.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rryktuew.html


<!-- 参考信息 -->