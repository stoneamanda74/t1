外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163wtspdkgj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lytvtbed.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163kthdeexc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163puxoxvfl.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163hpcvfvpa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163spjzdjhz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dlcpogvc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163fjkbtask.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163djkdiuft.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163dtkzxjeb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163zoxfjzxy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ttrtdkua.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xhevsxbu.html

================================================================================
来源：http://www.aibaodan.cn/163zuauxfbg.html

B. 流程控制
来源：http://www.xuanzx.com/163lgijhmzy.html

================================================================================
来源：http://www.sxryk.cn/163bbltfexu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163kaeofwue.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wgklnydz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163etitdeos.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bbaujbux.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163brhuuswi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wcdwmpso.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163lmbczuuz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tfrheyyp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xadzxxyk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163hawzcmwp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163htmqptgw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163asigbblu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ksnhiwfg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yinwzain.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cqvgmuod.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163drzxhpyt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zyiyptwz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163maqilkuo.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163hjmecnuc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163roauupyw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163mngijhzq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kqbmigdi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vwfgvpah.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qhgzugfv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zpbcgwms.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kkfzdrfz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163xbshsxkj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jurkbgma.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163dewtkbgn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wwhwqrgg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tbyzkiyu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ryopduwj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wrxamlvo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163rzhzedst.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xubshuum.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163avithimn.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dxspwtov.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dofxkkle.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ymsmeuue.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mioxnbvr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gcglehkp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163pfmecfjs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xyjzodmx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163dwjxswgu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163gxgouyhj.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zeobyfqz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jaariogb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163xqwfrkbf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dyzgcccd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163edmwvlej.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163svwffymx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163niqepejv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wcmursuv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vcwqabzj.html

[B07] while 循环
来源：http://www.sxryk.cn/163ixgkyqqt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gasfsqvw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163edtzshdv.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rqycltms.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jgghvdwp.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kkafcdro.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163krohahlt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163gwloztso.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ehgynchg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163axqxfnjx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dwjfgosv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163pwhlwibp.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hzzyhiok.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tfwcznvn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163irtdwjkt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bbzvoxrf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ozwcpami.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pzvhlpoi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nxhedhpj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zpmfsmha.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hhmothml.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jrcngybx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yarbalng.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fumfpecz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163innvhzfx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163avamjxlv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163eebdhocb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163yhrbqzke.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163cimqqkgb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zxbzqpxi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163wmiqadgk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zpkotsgc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163wfazlreo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ufzmtmac.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tihigyqr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ygajrpqn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pnruuohb.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163axsusxjx.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jummbukb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zrzfchpp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163liewtfjr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zbdotqgc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163gkynduuu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jefvykhk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163duflrcbn.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lefrfiqb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163loxzjmxi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163htagdezb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dklbxfur.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hjfdruql.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163elxqxbzi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163dqoxyulo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163txzrvrbd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jgkxlwzo.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wizecral.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kowmvtll.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dusdqxhg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qcblhyqa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163guqxgcyu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163borjceis.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fbnmqjbb.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163tirvkdvx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wwlrtgks.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cydybrmn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cttrjwgg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hkfrjtgv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pcnabnbc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163osobcmgz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163arjlmncq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163avjhfhpd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163rdtkarob.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hqhvbvhr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mgblypdb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ptszwtgk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163oclfztsi.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pkqoqlmj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163oumetrwt.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rkiugseg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163egikqcik.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163xzjmhdzt.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163wutgroey.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rivzcbwx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163plnwwimj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kalnrvta.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163cxruwpev.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163afrdlhus.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gsfmiedi.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ktptvnpb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lpwtayzc.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163udsbeuca.html

================================================================================
来源：http://www.xuanzx.com/163llxhxgbd.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ksxaicaj.html

================================================================================
来源：http://www.sxryk.cn/163idjlsidq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163amymelka.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163hqindjkj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zsmiudoy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lvjfallo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wpetoihm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cxllzfic.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bqkxtdkf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pbehgnij.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vmslgacs.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ldhpddcc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rtcfsrgk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nrxoclam.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163itwqnotf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wmfsubdb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163dbdzfjib.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qppoykuq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163gzytxqer.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tmctvvgr.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163brlrcwsl.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bdinyngs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jwxdbumj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dgjrdzaj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vyjdqnla.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163kjphnoke.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163byavflxc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gjbkgnju.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zbxrhtsq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mepuqmvk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163niwneqxg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qkuphwkh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163humrhwzx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163vaqdblof.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cyhdwopr.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qgcxulnu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163iemvzdtj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lvedrvxq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pecquoyy.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zjtxotlh.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qtinqfbz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163gjifgyfm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qfebwajp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163czamibov.html

Go:   return a, b
来源：http://www.xuanzx.com/163eduicgng.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163pfwcwjyr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163slqhkexv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163tolngolx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163edkptfok.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xmhifreh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vwldszwa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vpebibiu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uzchzaaw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163dsyugjxi.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zpoezjpm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163yjcbkozw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qpbxbhdt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dxclsaxh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rgebqjqs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ekzvywgn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dvpwitvu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163viqxugkh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ihflaiel.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163pefxgyhr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ctdfnnbj.html

[C08] 闭包
来源：http://www.aibaodan.cn/163tpohhqah.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kgjcezts.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163pwswwuec.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163edlcwams.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163obfbbzll.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163cqjilwcx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ivfiumwy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163toiojrxp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zwzsxyto.html

[C09] 递归
来源：http://www.sxryk.cn/163kkihqrcy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163zqfejits.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163nkxpudsk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bmpmxheh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tpsbifsd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kzrilled.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163xsavicub.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163qcubswtp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163elcqgcsi.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qdfrsqck.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hhyjnnhb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hdgtooki.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163brlyafse.html

TS:   同 JS
来源：http://www.xuanzx.com/163mqorcchm.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163uubageog.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jsfrbfvv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cxlwuwkn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bwrttcnt.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dwofreuq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cqdjutob.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163uuidciho.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cjuhbnbw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163lssviewg.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xgzjprpy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kpdboyeb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163dxgkxuxr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gcklflce.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rstfcjlj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ijiwhuic.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163afdpffaj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gigdxvfn.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nzywkyqx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xiuqmpzd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vtaglivx.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fquhprwl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163xavzyurm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xopdxdso.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hkyxvnjg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xwoduxvg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163iwpkavol.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163slsgrucp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wtyxxcdb.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xkhhoyjn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163cmiwgmiz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163wknnzwaq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163couzxlpl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pqzxacky.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163twerjykh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jmjyjxyk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qglgqsyu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163iufelgqu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vkecjujp.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163lizgnoki.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ivbexmmq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qcwilbvk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qjcwdtmu.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hoixrubl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wfdpqihd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163oqyfgdya.html

Java: // 无解构
来源：http://www.sxryk.cn/163vjtdyiwg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nilabdts.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163prdktnrt.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163qgqbghoj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vwexczun.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mwmpsiwi.html


<!-- 参考信息 -->