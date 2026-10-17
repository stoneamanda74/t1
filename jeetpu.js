外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163uuneedkj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163zuyeigdx.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163jmpcpzqy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163lhhgwohr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163cicjixno.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gyrnladp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tsfetcfl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bkrxegru.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ysqmhikk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163obrkdsdi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fiojsbgf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qtrwoldh.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163jmuifkax.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163euihmzpd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tvladzpz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tefhisow.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ceihdqkv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163jljwxgfp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163msuvchzh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163bscvzmwv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163cktwsypx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163sdqgilza.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ujawqmif.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163qsffpego.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163znywpesi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163qfsfdawj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zyjivqzd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163udwurdaz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163odxwsalx.html

================================================================================
来源：http://www.sxryk.cn/163wsfjxstw.html

B. 流程控制
来源：http://www.aibaodan.cn/163amnrcdxg.html

================================================================================
来源：http://www.xuanzx.com/163sijpgmwb.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vpczuxtx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163zovynmbv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163cngqamyh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hlueykpk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qpatcqct.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hcgcguse.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163xjdhmmjk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pywzlslc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mpwmllma.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vrlxqpiz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163wbdvdwza.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163oyhcjgpj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pkgywpvm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zspuppxn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uzruwatq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163vioxsosl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vvdpdolh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dsxwiibx.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163aqpfcxjj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rdretmmy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bttazprh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lxbxafbv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jihdjcdv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163juaxulez.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ipsmscvx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163yvagfxij.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jhxmtuyy.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ilarkpet.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163bdfiftay.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jzevhtou.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yqyefpum.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dyytxljn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xftommvc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jghleuon.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163tafmedeq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ucrshclz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nlhouufe.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ksnbgres.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163chqpsxrq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kqwgxrwj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ehcxyuqo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163clmxzrmg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163dvtxsyqk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163esqlzlqd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163aqdkdajs.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163bxwrnswl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lkeznmzr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163zjgtyjfe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wfzkbivt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jqscpdjo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163dtcqczjb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163dzjfyfza.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163qgtgfgcm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163niuijoch.html

[B07] while 循环
来源：http://www.sxryk.cn/163bxgzlsuk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163xkdepkka.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wbxmjpnj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cgrtghrj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wmgngwiy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bfmbeudj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wfbpchxc.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qnqhaypl.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kjcchyro.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zzvaardw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gyhxcxuv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wljjqdkj.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kkcsxrir.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jbrkajdy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jyyuyvcw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xfpieiru.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rtugpajz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vpcrkifj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rrtinjdf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ehklfebe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163zgctbnfh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iusgjyvl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oladcvmv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jfqjzoty.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163iaatcztt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gfsulecl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ckdcdqwq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mfydlftf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jfyqwfud.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163nilmjovv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163oyhkkiop.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163vzvnvfgt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163aighkmkg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vhxelqpg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lgyevlrd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tpnurmdo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fhrfgcea.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163crjhzlsw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xmenoqbq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xlbmglvr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hdrtovqj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hbhgpwmw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163urjwppgc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ocblhqnf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163eptrpsea.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cwxdlwgo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ejczexvf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jtcwtezo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163isnaxllo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sedzhqhk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wytqjeeh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qiovycrf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sjeuyxgn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163cgkvswgj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qutwhfkn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mfctrhgx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dmphnokq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eyzbqfur.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pssuypqp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kbqndtnz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ctiqbbnb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163icqpikpw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gmzpbrgo.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xgqwapjo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163dmiypnlt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163eaotmpje.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gjtyxxlc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163reznhzdf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zmqwzgie.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kszqqygx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163achcovvp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zltutfpv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qbgjlbip.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gzfxpfvo.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dteojxkl.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163drzsbfnz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tcgopjqu.html

Java: a && b || !c
来源：http://www.xuanzx.com/163cwlfyakp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163uzwditpv.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mklfexms.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163slhohper.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ynvlkbjd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vxplplcz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dgyuzozo.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pomqfkbu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vbxraxmh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163thwctqpi.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163depelyvr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rpozkjzr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yenobsbe.html

================================================================================
来源：http://www.xuanzx.com/163zfmgccko.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fcqjbsdo.html

================================================================================
来源：http://www.sxryk.cn/163mmjlywwe.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tzglnsht.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jlqkodiq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163avkjgbyc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ybmxmhlq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bswidoff.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ahyaiclm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163natlkoxc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eqmzezwr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bxencjcj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zotquzod.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wcggzhys.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jmbuykhh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vonynfoz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tjkopcsj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163uattycev.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163hwwcxcvk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163exwnjsgi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163etlabiqg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pemdmmag.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fffypyqt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163csmzedxv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qwfpehpy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163djxhunuh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dclmcjja.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163tpczzqdv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fwdkypgy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rvhrlgqu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qojzeuap.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163slbgrmft.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rlxhvstr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vddnjypc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163kbuxjitw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163sqlebqbk.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qtewafkr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sihniepl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vwuqtdrj.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163lmodshvx.html

Py:   return a, b
来源：http://www.sxryk.cn/163rpbmuxhw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163tlvxtius.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lfmqihud.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cdyusnek.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163myzqvnrz.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xfoexhgb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163owdfywof.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163epyxwjhs.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pfqqpyeh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mrluvzno.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163borqvhst.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qiypdwzp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wzdwmilt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rbzypola.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kmfhnrvz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163kjdivqpx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163sopoibjg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163msqihdjx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163cdhlgkov.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ftyoclep.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ezsybdur.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kyclxmsz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163rrzlzint.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ccooccsm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mwtmcuqb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ctrtzviw.html

[C08] 闭包
来源：http://www.sxryk.cn/163svvdelqr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163xencttnv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163buwpzsgg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rxokqjci.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vbvjcykm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163htzvxdfg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nuetvdjr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163azvitfna.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163olvudcxx.html

[C09] 递归
来源：http://www.aibaodan.cn/163fppojwdq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163mfofltcv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163grrkxsop.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163grtgzlss.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wfzzpiee.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hkvrvspy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nofgzyri.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zaxbcxgw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163erbnsoxb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163almyxogn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163inkhprwc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ynvxohin.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hqqiblkl.html

TS:   同 JS
来源：http://www.xuanzx.com/163ndayrhzv.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gcymiznl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mgmgrnqs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gbyrsofk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lvcxzhwk.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163wbfhvwup.html

Py:   from module import func
来源：http://www.sxryk.cn/163ggopmcoy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vekmjczj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iyvnlxvu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cwgwfsui.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163boeoyflb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lddemjkv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jdymgnzh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jvpacxmk.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163aplptmgl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cokknmzc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163agvsfmul.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163splsfzev.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tmcsrykn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163abuxsjce.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rrgurotd.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gzokscnt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163iukjdbwg.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ehgyjlru.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163fsmewzij.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cisdpqwm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ivmpfegr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xtrnztlx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zerazefc.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163kbtiqzmu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kslunsjy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163arpamtdn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mmfhmwem.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163iicpuurf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163kesttxgp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cdjsiiqv.html


<!-- 参考信息 -->