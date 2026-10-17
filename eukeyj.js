外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163cuflgviv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xmtiakir.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hscdqpsx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rgrfeapl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wrnfgelj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163mkodxveq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163bubgpwzk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163shqypcbn.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ghzgqato.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163opeyphqw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ssvjhfvf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163eqivhsqk.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kkqwybvy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163exyrlbal.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dzdycpjc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hcfvobga.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163vmfcdojn.html

================================================================================
来源：http://www.xuanzx.com/163qafeqgax.html

B. 流程控制
来源：http://www.sxryk.cn/163wchnbszj.html

================================================================================
来源：http://www.aibaodan.cn/163dupkkkjm.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qfojefcb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163qmcpzxkx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163czglqjig.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nhzavtky.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nlwbkstw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kxjoetgl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163kcsvqwuq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163aubzdqva.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qcoprmjv.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163sxhsdnde.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lrmwzdvj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163iheakzzd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zskldhge.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nfueqeiy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zolxsrle.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163zofnkrfb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163taxejoyc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ffukrmqo.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163exvpksbj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163jvrlijkg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163zempense.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163arzkxnqk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163yuezjnax.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163bvrrfsff.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163cfqehcpp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mbjrkdsy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nyilfoyu.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163aeftfomp.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163dfzxeykf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163koissxva.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163urkzzcjy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163orbnwlda.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163tvkmmyzz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wvpvuhyp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163acibigpm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163adltygoq.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mvyrwcxk.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hwdltmgq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ztfjgyak.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xgozuudx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mzynmsgx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163zhqphqzk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163dquxmcct.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zfzihsbf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ptflfjej.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163fzvyfbso.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163szhqfimu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163goziuujk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163doiydzhi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163izqlaedf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rjejgntn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fbhxsgxz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wqwgqtkg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163zqhnqxlq.html

[B07] while 循环
来源：http://www.sxryk.cn/163ifrkmiqo.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163nfkhhrno.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zgiafxih.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cgbfyjic.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ynvvhbtr.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wyoxnole.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dleyysrf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163vfvzfhme.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jqqsmzje.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163iixkqixj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163gtrofjnb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jsdklcil.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zkyvbzrc.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kswvgisr.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cmrtbnsy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ubhqmlek.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gurifitt.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qybtmvqu.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jdvrbfdk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163rdacqeav.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163cqhfkbcl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ohykmctk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qdlwfqif.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kmgepwrz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ywtgddnv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hnsrpnyk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yfbinbll.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xutfzygm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ytswrwow.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163elwffayd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fenelkpi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jqnquthg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163azzvnriy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163npbmyxsc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gzjpozia.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bbuwpmeq.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vkikfeio.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xpfunkjh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163lsfappud.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163axvubtyw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vmnlfmas.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163klwimzga.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163wxxdzkek.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163uzkzhias.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xqkghtgd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163oftcmqhw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163morraqlt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jnppyxsd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163osqxezsn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mbmivnol.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qejqozho.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163efvkbrnc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ksvhqkkv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ujmelgch.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ohccpegx.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wknfboqa.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ipteleha.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mauuhlen.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sdabegwp.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163avqykfyb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hmijlcte.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163pkpvkpwr.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163vllasnbj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163atienyus.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nsqmxarc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163htrerodj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ztzndmvg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163owfnoyea.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163azyhqwyo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qjqybhjt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ohqdcksd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jsztikeb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pugrtjch.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vlhkqoja.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163emgqurdx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gvkuobwi.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163pbfpocys.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163jojrzpzm.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163dgncpivc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dcsysncq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163wgtfbifl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fbznekgk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tgjivfnv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163bwkqsasf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hpsgshft.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rhesomcl.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zcqcljck.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rnuhbdrd.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qbsuwmro.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cpaaooov.html

================================================================================
来源：http://www.xuanzx.com/163fjdcnnso.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qfnzkttm.html

================================================================================
来源：http://www.sxryk.cn/163vrgseomh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kzavdqlk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xkzeyjsw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163igskykom.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163geomplfv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nrjzxvlc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cxfifzen.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163sjztapic.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kgauaeam.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bxnzbqtx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163eqggltka.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163azckwwrx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163uwqadqzz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qhpmbjmb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pdhaygox.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hogxldyx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163yinsgkye.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pnsirxve.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163yxpsegnq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mlaqfulp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163nlfyzjjz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qmxpurgt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163moneisdr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zypukkpx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163jahliorg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163vhaydnys.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163yaqmcyvl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163aawnezid.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163acdlqwyu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pyykolmt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163orwuhkdk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163iqfpxjdl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rbifaqay.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163slserzyp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xgeyniqd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wbtapnml.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nxlqblvl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cgjffqlo.html

Py:   return a, b
来源：http://www.xuanzx.com/163wrpsprep.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wjictrmy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xlcoagnb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dwcsujtn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ooliukty.html

Go:   return a, b
来源：http://www.aibaodan.cn/163cnuorbwg.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bgpqhcie.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jmourefv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163zqrhpmjw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yyvxrwpc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pkvjvzgn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bskgfwnc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kvgubrym.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rrfyspff.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xwgnskmx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163apdpncpy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gcrfienf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zvgcpeos.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163pnrgjfko.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163cawbzuyv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pypbggld.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163sdgvyrre.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163dcsxmocb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163yywgqpay.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rxpcbgtu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jxlcwibr.html

[C08] 闭包
来源：http://www.sxryk.cn/163fqxxpbia.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rpjmdpzj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hqqmfeeg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xqlfgoeg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vjlczjlb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163somciusk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lwsdrboc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163txpaoopz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cgfqrmmd.html

[C09] 递归
来源：http://www.sxryk.cn/163hseluziq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vtlzqflv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163mmaptkll.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qnumsfec.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163eqxvufui.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xvpsnzlh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wwayscwc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163dobsshiv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nncccpbo.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hpkdaoee.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gplfkyys.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163cbgdwnyn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ctrqzuif.html

TS:   同 JS
来源：http://www.xuanzx.com/163xhfavsff.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gdwlvkmy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fjpbppic.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qxdiwilu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163uthixqyn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wulcoxnz.html

Py:   from module import func
来源：http://www.sxryk.cn/163psulngfj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fyxgubeb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163myahknge.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kwrjwwgu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163fdxnelyx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163lsdyqtuj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cooimwqy.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163iexhxbeh.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hiiidvsv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163erbvzpct.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bhivfquf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dyrqrohd.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jertkrqq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zezaonnj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cfkqlzeb.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gtjgwefh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hphsnykt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vofdovpx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vannumdp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zuxgvchi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163wvznziik.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163aujpcgdt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qetsppax.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bikbylal.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163escgffud.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rcmqpvlv.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rwxhwsok.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gxwvpqtp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ukdkmqaq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ewvtiosw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ucbazjmg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jhgcbdge.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ipmwpdtv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nyixosqq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163yrycrktz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zutjtoda.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vbgzgiig.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163phxcratf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163teleycch.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163wkcylzpc.html

Java: // 无解构
来源：http://www.sxryk.cn/163lpubfabx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163thmrbicr.html


<!-- 参考信息 -->