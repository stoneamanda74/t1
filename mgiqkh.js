外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163bvqyhgpc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163czojpyeb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163evizwwln.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163etkhogga.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163sdriyqsb.html

================================================================================
来源：http://www.aibaodan.cn/163djywcpqk.html

B. 流程控制
来源：http://www.aibaodan.cn/163ecxbhtsf.html

================================================================================
来源：http://www.xuanzx.com/163zjwwozec.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163fgwshlcg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jvhtujbd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163lsdrwhqr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uydybjuv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163whbxzcgd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gvangfyz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163nnwvmgjg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163xskfiskp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mouxigaj.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mnbtuizm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xobhktgz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163cxfydctx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pwcxvcbs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tmmxaonf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jsjufkau.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ypiqflvu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nhvrnpbq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wkbpmghv.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163hybmggog.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163lxywuivw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163mhcxobom.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zpdbklms.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hemrmuwa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163icknlass.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gfrqmqri.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163levclnlh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163uxgxhlwd.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zfqilbkx.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kpvyvfqm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163fftaxcrb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ubkoiyvc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163oqywohsi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163zkxplecs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163pselmkdd.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163koeoosas.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163kadikjwc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yitmiabs.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pepnvwdu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kcmifwhp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rybjmxxk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dabtpxyi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ovojsyur.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163wgfkcwxq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jedfrmay.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mcixnduy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163kzscdcwe.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bebojabz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qecbwypg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163sagsmonp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nlgtsbvo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163sycwvrwk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ipgqqgyc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ttrfaiur.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163swekvpbq.html

[B07] while 循环
来源：http://www.aibaodan.cn/163vpklcwoa.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163haxgwker.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lhmikkde.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rhfsihwy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wweegdop.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zlddmvep.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163frnkgmzp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ntjarkab.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iqeidnzd.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163muzflknv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163cfntvpne.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163usvmrflu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163adpuqeco.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nfmmypvz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mbxvdkkw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163tfvvxyxo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lsxwysao.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vbxzmjkj.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163pkfwijdi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163rredrrfh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163smiaatms.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xvcfkyoj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bonqewxl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wwblwjqh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163uktmtqpo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163rccqnbww.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jjpknqjj.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hyydnwbr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vhnhtafu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vlmnqabp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163gvnckigc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xqcxcztd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vrwjtnjk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gfwoehps.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163zlgilihl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163sjoanlzk.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gmzmfxoy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163irlwcjhj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xidgwqcj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jdigizrt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lgurqdje.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163iphfqgvf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163adxtoppa.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163icxgdnqf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163bwqbznng.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gcoxrfoh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ggsbjfvr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163teekarvc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tebrypnr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bywpjxub.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gpbyfoca.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163iqsctxqr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ekyhubjv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163oiwhhsuy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mppemgqx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163onbrjrkh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163astwpdzd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qydphgip.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cpkrduhz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vtgmqhzd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163iqpydgfx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mfwjwsbf.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rabtcvtn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kjrxlzxl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ovuygmfy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hajqmzys.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rrzzstjj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rctkupav.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nuwglylt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163biakpfro.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163bhjvacms.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163iarepeah.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wnpiwxfp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163vutcazlc.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163cqeixgsk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ofjpsfwb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163votzhxqh.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163lngqntvr.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163uqitqxra.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gasqmpds.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hfoupvoi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ajnjmjhq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163yhxrmdkt.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163bbgrjcry.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163abjspiak.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163pycjoauy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vcwzpwzd.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rrmvargr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kajasjaw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mrhlzkyx.html

================================================================================
来源：http://www.aibaodan.cn/163onjlvtgt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fyumemwh.html

================================================================================
来源：http://www.sxryk.cn/163buhlmcse.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ctgkjerw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qiqvutlj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163brhxchni.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jimlnrgg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fqowktao.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vxjxdkhf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163fngjeijv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rujvchyd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uiiokqma.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qnxwrgtw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163oeqmdijs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wvqdxlwk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cuzoricx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163irqsmjux.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vdznktgc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163cblwrlwh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vttbyoez.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163oecxwliq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163lmfyqbeg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163iudfmuzs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fmixilgp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163crgavhms.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qbtllzaq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163lkmqmfos.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163jhwzqbea.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163bwoekpnj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rjngzuxi.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rvjaecau.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bgfukzld.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163whsoespi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ihzxvjbu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gzpikboa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kfqpjpwl.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163jgmrlgqe.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ejqwzdaz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gfswyugc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ejvljbsx.html

Py:   return a, b
来源：http://www.sxryk.cn/163xvvtitvd.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163tinrmggd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163iapcjsef.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bifccwui.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tzpfksmj.html

Go:   return a, b
来源：http://www.xuanzx.com/163avcuixej.html

Ruby: return a, b
来源：http://www.sxryk.cn/163lwqsyrja.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dcwwqkny.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xyyscqha.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qfqisvlb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xssxgidg.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rqtyttxb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ubofqtdc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ttsasgcv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163djrguqie.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tyktrnav.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gpqmybfd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hylsamog.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163iizztcfn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163opiccogc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dqbruifj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pjlyctog.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163djzpblhm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163beceuzob.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163chxxuonm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163leoinkpr.html

[C08] 闭包
来源：http://www.sxryk.cn/163vrkgqled.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kmylubgv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163doxiravj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hgjcwbkk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qipfaihp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163wwbvbyet.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bbiqudny.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163lncqokhc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jzpvjpft.html

[C09] 递归
来源：http://www.aibaodan.cn/163psqphvux.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ovuuhkjz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qjbynzgj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163otqkzkhh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gxkccwzr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wldbrihl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163foshyjre.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kilewkiv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nowgeohk.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fhyuyxhc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tukqvcbb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lmtnwmiy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163czcanbdd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163nikkctto.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lxlbldtu.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kppukpxm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163drcpkjpo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rpejcezr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dbnorppx.html

Py:   from module import func
来源：http://www.xuanzx.com/163yogybvos.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vzjtckxe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tqtvtmis.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vmehvijc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ckrwltoq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ilsuscmr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ivmyyfzj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qnqmhicd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ldgyhysg.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163wyvbeuff.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mjclliep.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kfngkybg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163toxhmzth.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pqizahjq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rhcfpydh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qktebhfy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ugdriayp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163yjffrycq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163rdbugzzz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gqhotrzb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163svzaqfgy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jrabibsm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ktpzmqdj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163djctjpgo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163deiaiaua.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ptoylqju.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wgvnjirx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qpqsvdbf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163avscygvp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dlozlzhb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mwhbaqco.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gsxqecoe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163yjrtchjp.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163icjdmciy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nvmwaavm.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163emxxbgei.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gtgbgvdp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163mbffasjb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dzfbltow.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163aaqcqcdy.html

Java: // 无解构
来源：http://www.sxryk.cn/163wnhesavg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tuvgydre.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163sgkpwmep.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163chokgsti.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vucmoaqo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163kqzhnkkr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dsdbrlbt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cotehiek.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vxduhssq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163veorwabt.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163blpmpmfl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mlaxttix.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163hcdyicup.html

================================================================================
来源：http://www.sxryk.cn/163losbibef.html


<!-- 参考信息 -->