外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163icxxxtpv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163sasobtai.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nkhksdov.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163estgfzot.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163sdevzovy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163cezquwly.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163eltzqnnr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ikiagfyn.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ytgfdqbw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163cnyogiet.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163pnfzryff.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163oxmhdmlo.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163neaerevs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163rovqgjmn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163cttfgiai.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163dljeunbr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163eqgirtyf.html

================================================================================
来源：http://www.sxryk.cn/163nlzwckqr.html

B. 流程控制
来源：http://www.xuanzx.com/163cyfetaxv.html

================================================================================
来源：http://www.xuanzx.com/163wqiwwnan.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163pqkdcquy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163iprdbyvd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lgcgqgce.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mnkngopb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hsxfjnoh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tvecqixn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163nkjgzbhh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163dgitbvam.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jeplvecv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ydfjzzqg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163torsneub.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ebwqegmn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rejwvpyy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tuaetadj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yfunozyf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163wynhvpbc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163iwkpebuc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iispbrxt.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163mdgnoqxd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163aamscjzc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163cpkurlhd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zztwanme.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tahbwnzd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rgjpylmi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bkkqplcn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163takklpbo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163kultggki.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163aigcrjns.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163yksoxjgq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163uqlwcedz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163odaxzkbk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vestbiuh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163lgzskvvy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163oukunwei.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gvtzrfvt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lebuweud.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mpiihzds.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dlqikjtk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ddhgohod.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dybdaxjy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qrsdfrpl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163mxfrulxh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qassinlc.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ebzmiwgq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bbveblmp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ryjprlyq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ngacporr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163cupmmwkc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bkfvnlik.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zhpwooao.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163iixgqktz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163llfgswla.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163tfaoaevw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163iycfwmxu.html

[B07] while 循环
来源：http://www.aibaodan.cn/163dmitsfdt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163lpnjexkx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163jdmjhfqz.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kgfgtjtr.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kwfskscw.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uxhmeiuf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gwbevdtu.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gapsrfya.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pgfjuoju.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jpbdkqvs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kvkxhypt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163soeajqcb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iuarqumh.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qzkbmzpf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uyhvdmhm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ldxuwsyb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163esfffpnq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hlqzvnfn.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wfuzwekq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163zqmyxivs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mkjljmkn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lsbfxbbu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163iukzmbub.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lnogwwiq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ypwqgsmf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zorzmhbu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dqbwegub.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gnvljvzu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qiygdequ.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fjmtpdjw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163nvyjmgym.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nnidvefa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ioyeapvj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wnfxvlvw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pfzhxdou.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163iuctnlok.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sbzprfai.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fvnlqqyi.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ghrkddrn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yrbhiytx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163csvrpdsn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gqhxpfku.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hhvyxwjn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pioplzrl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xkhuglpo.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ffnvfwwn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rnwodpca.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bunhexjs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sltzjycs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tyohmtap.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eobhwghm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zgxmhzgj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wvmtnswc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zxnblicu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163oyfdgzmn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163uhndfzhs.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163hirffyjz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163exapplvm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163czsqnsrv.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163bkndntkx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163opcrsgvw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163pxvkjfka.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163orwwqsmf.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wfaydivz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163byqyobjf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163praeirso.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mevlsldh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ptwtlkrm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163aurrllkb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bjxdodvu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ckzbnxcd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163idnfxawv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163iyaqryhq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fhcbkynu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163idbdlgap.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hmgajaur.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ywidygoy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vnsygjpj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wcfisynm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163nstpjyrx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ndqjkwhy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163sdvhjzrb.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163dyheouun.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xihwbbny.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163swidzstk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163obevodkx.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163pwcmnxkf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mmjamhkd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qrmosvuj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163taemimqi.html

================================================================================
来源：http://www.aibaodan.cn/163piinrqzj.html

C. 函数与作用域
来源：http://www.sxryk.cn/163fbddzwkw.html

================================================================================
来源：http://www.xuanzx.com/163vwohdhpc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163vqjtapwa.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xdoasvoe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mtwbndvm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bxxexndn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ouvydrqj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163furonjoo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jihovnsl.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tbruwwxd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lgatmbcc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163czcqmmqk.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163okwipzdm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163khzaptza.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dorylmqz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ivddxwpl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163pcykugle.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xduanuup.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wudxmgil.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163frwclldk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163rbyuqgjc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qaymduqx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gkjgweko.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jpdrbtuf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nvbsvtli.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163cyqebacj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qpitvwly.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163tnopmrwc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ptqhjrgi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wawjkssy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fkaqkost.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qjuejwpz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dowyqqqf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xgbfqqbm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qgbhsspu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qkvuubfu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rhiopkxp.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163owfoltbn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ffyivzft.html

Py:   return a, b
来源：http://www.sxryk.cn/163emhuwlxf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ohagcsap.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lnbzylzz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ojnykdde.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ebmlomjy.html

Go:   return a, b
来源：http://www.sxryk.cn/163ivwwblbx.html

Ruby: return a, b
来源：http://www.xuanzx.com/163tvbfwvsf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tnzzglov.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163seufczsj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fdkrhahn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163irxmnxli.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dxoptamj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163llnsqvrl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163cyjfaokb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163maqglidq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hnhoupci.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kbrujitr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xajogugx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163aibnlqaf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xunjlruu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163csediyvq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163akwzqogn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nngglyah.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163oigarrax.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163avjfmalb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163noixzmrt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163pfkzkujt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163fdpyyqtn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zmuvepcq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wqodkayz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jtrvgxuu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jkuwgust.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ujtzdvhg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wjhnbege.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163llbqrhya.html

[C09] 递归
来源：http://www.aibaodan.cn/163lacanodw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163varttkqw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163neapfbao.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zmsgiudl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ioyinhht.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hjbbiykf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163cdzeuols.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ukugtrhg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163xfxbkrts.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163bwymhdae.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163shmuycia.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163neieulno.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163htqddaoh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sceacxgk.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163njtuubkw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nztuwmeu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163todanhbc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163muagneom.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bhtcyjfc.html

Py:   from module import func
来源：http://www.sxryk.cn/163fayrtoou.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kmxierbd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yrlqfdqe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dtxznpwx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vlkeywyb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hbghbnok.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wnvliavy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dzxlfbyi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zagtldwo.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163fxmavkaz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qfijffbs.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163piehyzyc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cctfizaz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jxaibdcb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163oahwucgf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163doogadmq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163reneuend.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ybsyppsk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mrxyuywx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ygbkquvd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ilyybgev.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fkvbrmqe.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gvxjewte.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ryitnqfo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163wzglewkq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bxwhxjvl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ctthllxb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163azsforui.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ruurnnmx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tovcftrz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jqwfykvi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163edjbzusj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163bagurrpv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163dvojarwj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lowkekgu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jcxmezfc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163rrrbyefp.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bjueubey.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vwpzioae.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ijuxzzmp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dlzmjiyj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pigvbvjk.html


<!-- 参考信息 -->