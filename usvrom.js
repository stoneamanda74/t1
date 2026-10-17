外链999!wailian999！

[A26] 类型转换总览
来源：http://www.xuanzx.com/163evhwhezt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163fyhmjjnf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gsvhuhcp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163cklvzcef.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ltkwvrjc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163vrwuqsts.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163rfqhqjna.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gcvdbmva.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ezxlhfwq.html

================================================================================
来源：http://www.aibaodan.cn/163irnzbwuh.html

B. 流程控制
来源：http://www.sxryk.cn/163odgdqglc.html

================================================================================
来源：http://www.aibaodan.cn/163uaevwqkv.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163utcwzrgk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ccyuerpx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163rznnddvy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163acxmhypu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jwmwjqvk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bnjeuoop.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163plvgrkyg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163hnexejwg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ewjsrfvg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163uxrsvdrb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163mzdnwpva.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163szxbvmlo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kuofkyig.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163djmjlzaj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rkgwnssw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163povvvnmb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163pqstabcd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bssaapny.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ctwmcwml.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163yoyhcdae.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163flrbrdja.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mednlomc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yvemzjpb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mhkypdvu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163eblfouwz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hkbeyayy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xqigaeoz.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163taelqdkx.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163fbrdbuoe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163xrmjnrel.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163uhjzjujm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163smxztzzf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jnedbsfc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163suztlerl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163iikjgnvb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rhnrurzq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163udzasrgx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163kqadlole.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wdeyctlj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rosjvwnj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kogjikvv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163agutiapy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zazaoiag.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ilmjhpoi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fjsnfhxk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163syfrqtqz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tliyilbd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163znlgyasf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tdaeaxvw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163cwoujpbd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ithrouus.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163rqwortlk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163drryyypx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ickkqqyn.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jzvrqexd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163origggab.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ytvhwkmu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pzxyqgnr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pjslxawh.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163anfybjpm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vrwxyidx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163domsnvri.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mswvcpbn.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163pskrpnbo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wczfahro.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163auwwzhih.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dhhpmnkl.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pjqlurpo.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fhgfyxxq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qtnleeje.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163aztnvjmv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bfxdhjez.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zdqmppln.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nmicutrp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163tarciybc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mbypujsi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nguzbgke.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nkaxmwpg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163tnybponj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mloeoxrp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ieqnecvm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jfcmumiy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qtesdjst.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163srclricc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ijbpqvjt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163kfxthhsk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hiytfpaj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mapmwjmo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163dkaelamg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ttqzwyos.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ceincmgg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rtokwtri.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163panymnpq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nlvvhlmr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163egboryhp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163boferxpk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163iarkimul.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yglnhyhe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163iukilueo.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ktevfafw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fjviznii.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163hidhhyiw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163egtoyvlt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ridpuhxa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163znzzqmrr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163azkguhab.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163sugecsie.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163djxbpruv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ehjieoma.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rupggkzq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gczavnkb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lfrolsqj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zajlppwq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wxwtrptn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yreraieo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zaxinziw.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gbddiiyx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163pzdkyfos.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mzjqiyom.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ilooujrw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jkcyfhgk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vurvzxqb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tmesfccy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vetqygyh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163fmivvaoq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163awjvogss.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qlrfberh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bshirrww.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uoysxpse.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163icncdklc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163exdhxfjn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mojnvzfs.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163pyxmdkoc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163kdrrgqng.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ixysknnc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mdmcjnpd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bywjqqea.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163khoniovn.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163tfmsouzg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zmuwekgw.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kntusmkl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163lgvterhc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163mvjeqklo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ixrsemhw.html

================================================================================
来源：http://www.xuanzx.com/163yngcnsbe.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gcozhtvs.html

================================================================================
来源：http://www.aibaodan.cn/163rpmpoyww.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bbidvzds.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wktnthsk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mafapncr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163xvslsosx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wfhlwjpc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jyuxwtrs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rkgetvhr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ianswopu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163obqcfwvf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hxdbjglq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163saxtardp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wfgimtou.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ogvdjlmr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163mwqjwlvl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hbqarrbc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163sduztcwp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lbggpfzp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zcbznsnp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hwvwpmbp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163uhhkmkxe.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163idmblegv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tiaiuaqw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xwusbdgz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163frnfybml.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163dwqdqsqh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163modsdcvx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mncbfxvv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163fijisyxz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ccsvvmel.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lpkdywys.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dgbjhkfi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ewxmcgzh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163zdolsbeg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vcwvwrtj.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wviqhmbi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163upojheik.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ihwitcux.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gztdljxq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163bhsgzdah.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163dlesdnef.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163auywfwio.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163hcpqmnhb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lrpnfiid.html

Ruby: return a, b
来源：http://www.xuanzx.com/163nzsaiqwv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rvyhxpov.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163meldfzqf.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ptoqqeej.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163vifojlzw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163aaefkjkl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163odathtgv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163gpcucrqf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wwcctyyj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nfccdknt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lvoenomm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163eqkbxjet.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163atdlwyvg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163utwlsugj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rcxoxzlc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fdzsljbt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163spjnkjxs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163npjfakpx.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wqaxdcgg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jhnftokj.html

[C08] 闭包
来源：http://www.sxryk.cn/163xcnkdamw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163rcngsrln.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tdmxzdds.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fwoauumb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163noicfjzx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163nsqnthdx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163iydzaebg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163chonajds.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163arcpcdiv.html

[C09] 递归
来源：http://www.aibaodan.cn/163iwpmhiaq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wpittqlu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ytkuwksd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vletjiow.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163euusdarc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163wdmzrgjj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ylmffsfv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jbxufbsv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163wcrbehiw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163nclbzwie.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mwijlarh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rmspdrct.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tmpltder.html

TS:   同 JS
来源：http://www.xuanzx.com/163fyxhlhll.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163vychtmnx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163aikslbvw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163iumojbev.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fsdeqbjb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163dmdzhesc.html

Py:   from module import func
来源：http://www.xuanzx.com/163panysldb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gtxxmlwv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fawclqxg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163oqgcofbf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163pukaihxq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qxyzzolf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163yvvorswc.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163udjysxdy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xnykfeze.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qyvkcgvl.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vjtbcazv.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ekiljkqa.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163umzhzpsz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bhuvzmfo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163orjqdzdi.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dyhvgqem.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vqhavcle.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163svoponcs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xcepvxnd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xmbrfeja.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lsocbeno.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163heqniqmv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dgeyffuu.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bgxkvxtf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163naoywjaq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163gxtcadwa.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vksrmjpn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pmqhyczu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163sacrehqh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163lkucxixw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wbrumekn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163rmmfwwgu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163iwwmghsb.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ohmcqsjl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163tsdzqhwj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xwyxjlby.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163anistadh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ejmktbxn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ykvsbsrj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fmoqxkgl.html

Java: // 无解构
来源：http://www.xuanzx.com/163husnjjlg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163jszplawy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mgfjxjne.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163onxbhvkg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lfzhslgk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ixhtundm.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kmjwbjci.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wwzpdgpl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163byquwkgk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ybnpxyqd.html


<!-- 参考信息 -->